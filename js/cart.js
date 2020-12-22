// Форма Обратной Связи
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
        alert('время вышло');
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
// Бургер Меню
let burger = document.querySelector('.burger__holder');
let navigationRight = document.querySelector('.navigation__right');
burger.onclick = function (){
  navigationRight.classList.toggle('active__burger');
}