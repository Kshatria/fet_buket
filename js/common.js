!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){if($(document).ready((function(){$(".menu__navigation").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},500)})),$(".footer__nav").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},500)})),$(".menu__button").on("click",(function(){$(".menu__button").toggleClass("closed"),$(".menu__list").toggleClass("active")}))})),window.innerWidth>992){var n=document.getElementById("scene-1");new Parallax(n)}new Swiper(".home__slider",{loop:!0,effect:"fade",autoplay:{delay:3e3},speed:1500}),new Swiper(".bouquet__container",{effect:"flip",grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,speed:1e3}),new Swiper(".js-pavlova-container",{slidesPerView:3,spaceBetween:20}),new Swiper(".js-roll-container",{slidesPerView:3,spaceBetween:20}),new Swiper(".cake__container",{direction:"vertical",slidesPerView:3,spaceBetween:20,centeredSlides:!0,pagination:{el:".cake__pagination",type:"fraction"},navigation:{nextEl:".cake__swiper-button-next",prevEl:".cake__swiper-button-prev"}}),$(document).ready((function(){$('input[name="phone"]').mask("+7 (000)-000-00-00"),$("#f_contact").submit((function(e){var t={name:$("#name").val(),phone:$("#phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()})),$("#feedback-footer_form").submit((function(e){var t={name:$("#feedback-footer_name").val(),phone:$("#feedback-footer_phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()})),$("#tubes_condensed_milk_form").submit((function(e){var t={name:$("#tubes_condensed_milk_name").val(),phone:$("#tubes_condensed_milk_phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()})),$("#tubes_cream_cheese_form").submit((function(e){var t={name:$("#tubes_condensed_milk_name").val(),phone:$("#tubes_condensed_milk_phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()})),$("#tubes_coconut_cream_form").submit((function(e){var t={name:$("#tubes_coconut_cream_name").val(),phone:$("#tubes_coconut_cream_phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()})),$("#tubes_chocolate_form").submit((function(e){var t={name:$("#tubes_chocolate_name").val(),phone:$("#tubes_chocolate_phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()})),$("#tubes_lemon_form").submit((function(e){var t={name:$("#tubes_lemon_name").val(),phone:$("#tubes_lemon_phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()})),$("#tubes_empty_form").submit((function(e){var t={name:$("#tubes_empty_name").val(),phone:$("#tubes_empty_phone").val()};$.ajax({type:"POST",url:"resources/feedback.php",data:t,dataType:"json",success:function(e){e.success?($.fancybox.close(),$.fancybox.open('<div class="success-message text-center">'+e.posted+"</div>"),$('form input[type="text"]').val(""),$('form input[type="phone"]').val("")):e.errors.name&&$(".throw_error").fadeIn(1e3).html(e.errors.name)}}),e.preventDefault()}))}))}]);
//# sourceMappingURL=common.js.map
