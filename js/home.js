$(document).ready(function($) {
	$('.cat1').click(function(event) {
		$('.active__hold1').toggleClass('active');
	});
});
$(document).ready(function($) {
	$('.cat2').click(function(event) {
		$('.active__hold2').toggleClass('active');
	});
});
$(document).ready(function($) {
	$('.cat3').click(function(event) {
		$('.active__hold3').toggleClass('active');
	});
});
$(document).ready(function($) {
	$('.cat4').click(function(event) {
		$('.active__hold4').toggleClass('active');
	});
});
$(document).ready(function($) {
	$('.cat5').click(function(event) {
		$('.active__hold5').toggleClass('active');
	});
});
$(document).ready(function($) {
	$('.cat6').click(function(event) {
		$('.active__hold6').toggleClass('active');
	});
});
$(document).ready(function($) {
	$('.burger__menu').click(function(event) {
		$('.navigation__list').toggleClass('target');
	});
});
$(document).ready(function($) {
	$('.icon').click(function(event) {
		$('.dropdown__hold').toggleClass('list__drop');
	});
});

// Бургер Меню
$(document).ready(function($) {
	$('.burger__holder').click(function(event) {
		$('.navigation__right').toggleClass('active__burger');
	});
});


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


// модальное окно
let popap = document.querySelector('.popap');
function modal2 () {
	popap.classList.add('popap__active');
}
setTimeout(modal2, 10000);
let popapClose = document.querySelector('.popap__close');
popapClose.onclick = function (){
	popap.classList.remove('popap__active');
}
// время изчесновения модального окна после нажатии на кнопки и скролла
let popap__scroll = document.querySelector('.popap__button__title');
popap__scroll.onclick = function(){
	setTimeout(function(){
		popap.classList.remove('popap__active');
	},1000);
};


// прокрутка до блока с продуктами
$(".popap__button__title").click(function() {
    $('html, body').animate({
        scrollTop: $(".price .wrapper").offset().top
    }, 1000);
});





// Форма Обратной связи
let formShow = document.querySelector('.header__tel');
let formWrap = document.querySelector('.form__wrap');
let formHold = document.querySelector('.form__hold');
let formClose = document.querySelector('.form__close')
formShow.onclick = function(){
  formWrap.classList.add('form__wrap-active');
  formHold.classList.add('form__hold-active');
  formClose.classList.add('form__animation');
  setTimeout(DeleteAnim,1600)
  function DeleteAnim (){
    formClose.classList.remove('form__animation');
  }

}
formClose.onclick = function(){
  formWrap.classList.remove('form__wrap-active');
  formHold.classList.remove('form__hold-active');
}



let formInput = document.querySelector('.form__tel');
let btn = document.querySelector('.form__button');
let error = document.querySelector('.error__hold');
let errorText = document.querySelector('.error__text');
let emptyText = document.querySelector('.empty__text');
let rightText = document.querySelector('.right__text');
btn.onclick = function(){
  event.preventDefault();
  if (formInput.value == '') {
    error.classList.add('error__hold__active');
    errorText.classList.remove('error__active');
    emptyText.classList.add('empty__active');
    rightText.classList.remove('right__active');
    clearTimeout(callFunc);
  }else if(/[A-Za-z]/.test(formInput.value)) {
    error.classList.add('error__hold__active');
    errorText.classList.add('error__active');
    rightText.classList.remove('right__active');
    emptyText.classList.remove('empty__active');
  }else if (formInput.value.length == 10) {
    error.classList.add('error__hold__active');
    errorText.classList.remove('error__active');
    emptyText.classList.remove('empty__active');
    rightText.classList.add('right__active');
    let second = document.querySelector('.second');
    plus = 28;
    let callTime = setInterval(callFunc, 1000);
    function callFunc(){
      if (plus == 0) {
        clearInterval(callTime);
      }else{
        --plus;
        second.innerHTML = plus + ':';
      }
    }

  }else {
    error.classList.add('error__hold__active');
    errorText.classList.add('error__active');
    emptyText.classList.remove('empty__active');
    rightText.classList.remove('right__active');
  }

  
}


// Кнопка Подпишитесь
let SignButton = document.querySelector('.header__email');
let closeSButton = document.querySelector('.close__sign__modal');
let modalHold = document.querySelector('.modal__hold');
let body = document.querySelector('body');
let modal = document.querySelector('.modal');
SignButton.onclick = function(){
  modalHold.classList.add('modal__wrapper');
  modal.classList.add('modal__active');
}
closeSButton.onclick = function(){
  modalHold.classList.remove('modal__wrapper');
  modal.classList.remove('modal__active');
}
// Анимация при прокрутке страницы
window.onload = function(){ 
  scroll();
  window.addEventListener('scroll', scrollAnimation);
  let scrollElements = document.querySelectorAll('.scroll__elem');
  let clientHeight = document.documentElement.clientHeight;
  let result = clientHeight / 5;
  let plusResult = window.pageYOffset + clientHeight - result;
  function scrollAnimation(){
   for(let i = 0;i<scrollElements.length;i++){
      if (plusResult >= scrollElements[i].getBoundingClientRect().top) {
        scrollElements[i].classList.add('anim');
      }
    }
  }
}



