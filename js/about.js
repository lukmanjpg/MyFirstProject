// Скролл
$(function(){
	$(window).scroll(function(){
  	if($(document).scrollTop()>$(window).height()){
    	$('.scroll').show();
    }else{
    	$('.scroll').hide();
    }
  });
  $('.scroll').click(function(){
  	$('html,body').animate({scrollTop: 0}, 1000);
  });
});


// модальное окно с GIF
let gifWrap = document.querySelector('.gif__wrap');
let gifButton = document.querySelector('.gif__button');
gifButton.onclick = function(){
	formWrap.classList.add('form__wrap-active');
	formHold.classList.add('form__hold-active');
	gifWrap.classList.remove('gif-active');
}
// Изменение появление модального окна с Gif
setTimeout(showGifModal,3000000);
///////Модальное окно с GIF
function showGifModal(){
	gifWrap.classList.add('gif-active');
}
let gifClose = document.querySelector('.gif-close');
gifClose.onclick = function(){
	gifWrap.classList.remove('gif-active');
}

// Анимация при прокрутке страницы
window.onload = function(){ 
  window.addEventListener('scroll', scrollAnimation);
  let scrollElements = document.querySelectorAll('.scroll__elem');
  let clientHeight = document.documentElement.clientHeight;
  function scrollAnimation(){
    if(scrollElements.length > 0){
     for(let i = 0;i<scrollElements.length;i++){
        let plus = scrollElements[i].offsetHeight / 2;
        let plusResult = clientHeight - plus;
        if (plusResult >= scrollElements[i].getBoundingClientRect().top) {
          scrollElements[i].classList.add('anim');
        }
      }
    }
  }
  scrollAnimation();
}
// Превращение шапки в фиксированную
$(window).on('scroll',function(){
    if($(window).scrollTop() >= ($(window).height() / 2)){
        $('.header').css({
          marginBottom: $('.navigation').outerHeight(),
        });
        $('.navigation').addClass('active');
    }else {
        $('.header').css({
          marginBottom: '0px',
        });
        $('.navigation').removeClass('active');
    }
});
