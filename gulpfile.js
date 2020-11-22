const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svgstore');
const ttf2woff2 = require('gulp-ttf2woff2');
const  fs = require('fs');
const del = require('del');
const webpack= require('webpack');
const webpackStream= require('webpack-stream');
const uglify = require('gulp-uglify-es').default;
const tinypng = require('gulp-tinypng-compress');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');
const htmlmin = require('gulp-htmlmin');
const webp = require('gulp-webp');

//DEV
const fonts = () => {
    return src('./src/fonts/**/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./app/fonts/'))
        .pipe(browserSync.stream());
}

const checkWeight = (fontName) => {
    let weight = 400;
    switch (true) {
        case /Thin/.test(fontName):
            weight = 100;
            break;
        case /ExtraLight/.test(fontName):
            weight = 200;
            break;
        case /Light/.test(fontName):
            weight = 300;
            break;
        case /Regular/.test(fontName):
            weight = 400;
            break;
        case /Medium/.test(fontName):
            weight = 500;
            break;
        case /SemiBold/.test(fontName):
            weight = 600;
            break;
        case /Bold/.test(fontName):
            weight = 700;
            break;
        case /ExtraBold/.test(fontName):
            weight = 800;
            break;
        case /Black/.test(fontName):
            weight = 900;
            break;
        default:
            weight = 400;
    }
    return weight;
}

const cb = () => {}

let srcFonts = './src/style/sass/_fonts.scss';
let appFonts = './app/fonts/';

const fontsStyle = (done) => {
    let fileContent = fs.readFileSync(srcFonts);

    fs.writeFile(srcFonts, '', cb);
    fs.readdir(appFonts, function (err, items) {
        if (items) {
            let cFontName;
            for (var i = 0; i < items.length; i++) {
                let fontName = items[i].split('.');
                fontName = fontName[0];
                let font = fontName.split('-')[0];
                let weight = checkWeight(fontName);
                if (cFontName != fontName) {
                    fs.appendFile(srcFonts, '@include font-face("' + font + '", "' + fontName + '", ' + weight + ');\r\n', cb);
                }
                cFontName = fontName;
            }
        }
    })

    done();
}

const svgSprites = () => {
    return  src('./src/img/svg/*.svg')
        .pipe(svgSprite())
        .pipe(dest('./app/img/svg/'))
        .pipe(browserSync.stream());
}

const moveSvg = () => { // svg without sprite
    return  src(['./src/img/svg/instagram.svg', './src/img/svg/whatsapp.svg', './src/img/svg/callMe.svg'])
    .pipe(dest('./app/img/svg/'))
}

const styles = () => {
    return src('./src/style/sass/**/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/style/'))
        .pipe(browserSync.stream());
}

const htmlInclude = () => {
    return src(['./src/*.html'])
        .pipe(posthtml([
            include()
        ]))
        .pipe(dest('./app'))
        .pipe(browserSync.stream());
}

const imgToApp = () => {
    return src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/**/*.jpeg'])
        .pipe(dest('./app/img/'))
}

const libsToApp = () => {
    return src('./src/libs/**')
        .pipe(dest('./app/libs/'))
}

const resources = () => {
    return src('./src/resources/**')
        .pipe(dest('./app/resources/'))
}

const clean = () => {
    return del(['app/*'])
}

const  scripts = () => {
    return src('./src/js/common.js')
        .pipe(webpackStream({
            output: {
                filename: 'common.js'
            },

            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components|libs)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            }
        }))
        .on('error', function (err) {
            console.err('WEBPACK ERROR', err);
            this.emit('end');
        })
        .pipe(sourcemaps.init())
        .pipe(uglify().on("error", notify.onError()))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/js'))
        .pipe(browserSync.stream());
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    })

    watch('./src/*.html', htmlInclude);
    watch('./src/style/sass/**/style.scss', styles);
    watch('./src/img/**/*.jpg', imgToApp);
    watch('./src/img/**/*.jpeg', imgToApp);
    watch('./src/img/**/*.png', imgToApp);
    watch('./src/img/svg/*.svg', svgSprites);
    watch('./src/img/svg/*.svg', moveSvg);
    watch('./src/fonts/**.ttf', fonts);
    watch('./src/fonts/**.ttf', fontsStyle);
    watch('./src/resources/**', resources);
    watch('./src/libs/**', libsToApp);
    watch('./src/js/**/*.js', scripts);
}

exports.default = series(clean, svgSprites, parallel(htmlInclude, scripts, libsToApp, fonts, imgToApp, moveSvg, resources), fontsStyle, styles, watchFiles);

//BUILD
const htmlMinify = () => {
    return src('app/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: false
        }))
        .pipe(dest('app'));
}

const imgCompress = () => {
    return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
        .pipe(tinypng({
            key: 'ZZpT8qzszNch88jmYt1kKggxBSD7Y7CQ', //enter your API-KEY 'tinyPNG'
            parallelMax: 50
        }))
        .pipe(dest('./app/img'));
}

const imgToWebp = () => {
    return src(['./app/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
        .pipe(webp({quality: 90}))
        .pipe(dest('./app/img'));
}

const stylesBuild = () => {
    return src('./src/style/sass/**/style.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('./app/style/'))
}

const  scriptsBuild = () => {
    return src('./src/js/common.js')
        .pipe(webpackStream({
            output: {
                filename: 'common.js'
            },

            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            }
        }))
        .on('error', function (err) {
            console.err('WEBPACK ERROR', err);
            this.emit('end');
        })
        .pipe(uglify().on("error", notify.onError()))
        .pipe(dest('./app/js'))
}

exports.build = series(clean, svgSprites, parallel(htmlInclude, scriptsBuild, libsToApp, fonts, imgToApp, moveSvg, resources), imgCompress, imgToWebp, fontsStyle, stylesBuild, htmlMinify);

//DEPLOY
const deploy = () => {
    let conn = ftp.create({
        host: "",
        user: "",
        password: "",
        parallel: 10,
        log: gutil.log
    });

    let globs = [
        'app/**',
    ]

    return src(globs, {
        base: './app',
        buffer: false
    })
    .pipe(conn.newer(''))
    .pipe(conn.dest(''));
}

exports.deploy = deploy;
