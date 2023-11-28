// ===== HEADER ===== //

$(function() {
  $('.header__close').click(function() {
    $('.header__main-menu').toggleClass('header__main-menu--block');
    $('.header__close--1').toggleClass('header__close--1-tap');
    $('.header__close--2').toggleClass('header__close--2-tap');
  });
});

// ===== SCROLL-UP ===== //

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('.scroll-up').addClass('show');
  } else {
    $('.scroll-up').removeClass('show');
  }
});

$('.scroll-up').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// ===== POP-UP ===== //
let pop_up = document.querySelector('.pop-up');
let close_pop_up = document.querySelector('.close-pop-up');
let sign_up = document.querySelector('.sign-up');
let pop_up__place = document.querySelector('.pop-up__place');
let close_success_form = document.querySelector('.close-success-form');

// Open Pop-Up
$(function() {
  $('.sign-up').click(function() {
    pop_up.classList.add('pop-up_opened');
    $(pop_up__place).css({
      'opacity': '1',
      'transform': 'translate(-50%, -50%)',
    });
    $('subscribe-form').css({
      'display': 'block'
    });
    $('success-form').css({
      'display': 'none'
    });
  });
});




// Close Pop-Up
$(function() {
  $('.close-pop-up').click(function() {

    $(pop_up__place).css({
      'transform': 'translate(-50%, -30%)',
      'opacity': '0'
    });
    pop_up.classList.remove('pop-up_opened');

  });
});


// // Click on a button
// close_pop_up.addEventListener('click', closePopup);
// close_success_form.addEventListener('click', closePopup);

// // Click on the background
// jQuery(function($){
// 	$(document).mouseup(function (e){
// 		var div = $(".pop-up__place");
// 		if (!div.is(e.target) && div.has(e.target).length === 0) {
// 			closePopup();
// 		}
// 	});
// });

// Add the class to the button
$('.close-pop-up').hover(function (){
  $('.close-pop-up_1').toggleClass('close-pop-up--hover');
  $('.close-pop-up_2').toggleClass('close-pop-up--hover');
});

// // Mask for phone number
// $(document).ready(function() {
//   $("#pop-up__phone").mask('+7 (999) 999-99-99');
// });

//
// $('.form-group__input').on('keyup', function(){
//   $(this).removeClass('form-group__input--border-red');
//   if( ($(this).attr('id') == 'pop-up__phone') && ( ($(this).val() != ' ') || ($(this).val() != '') || (this.value.replace(/[_-]/g, '').length == 11) ) ){
//     $(this).addClass('form-group__input--border-blue');
//   }else{
//     if( ($(this).val() != '') ){
//       $(this).addClass('form-group__input--border-blue');
//     }

//   }
// });

// // Submitting the form
// $('#subscribe-form').click(function(){
//   $('.subscribe-form input').each(function(){
//     if( ($(this).val() == '') || ($(this).replace(/[_-]/g, '').length === 0) || (/^[_-]+$/.test(this.value)) ){
//       $('.form-group__input').addClass('form-group__input--border-red');
//     }else{
//       $('subscribe-form').css({
//         'display': 'none'
//       });
//       $('success-form').css({
//         'display': 'block'
//       });
//     }
//   });
// });


// ===== DIRECTIONS ===== //

// Hover on a block
// jQuery(function($){
// 	$('.information__block').hover(function (){
// 		$('.information__block::before').css({
//       'height':'23px'
//     });
// 	});
// });