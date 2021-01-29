// Форма Обратной связи
$('.top-phone').on('click',openCallModal);
function openCallModal(){
  $('.form__wrap').addClass('form__wrap-active');
  $('.form__hold').addClass('form__hold-active');
  $('.form__close').addClass('form__animation');
  setTimeout(DeleteAnim,1600)
  function DeleteAnim (){
    $('.form__close').removeClass('form__animation');
  }

}
$('.form__close').on('click',closeCallModal);
function closeCallModal(){
  $('.form__wrap').removeClass('form__wrap-active');
  $('.form__hold').removeClass('form__hold-active');
}

// Кнопка Подпишитесь
let SignButton = document.querySelector('.top-email');
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
// $('.form__tel').on('input',function(){
//   $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
//   console.log($(this).val().length)
// })
$('.form__hold').on('submit',validatePhone);
function validatePhone(){
  if($('.form__tel').val().length === 14){
    alert('right')
    $('.error__hold').removeClass('error__hold__active');
    $('.error__hold').html('Оператор вам позвонит через 28 секунд');
    $('.error__hold').addClass('error-validate');
  }else {
    $('.error__hold').addClass('error__hold__active');
    $('.error__hold').html('Вы неправильно ввели свой номер');
  }
}
$(document).ready(function() {
  $('.form__tel').mask("(999)-99-99-99",{
    placeholder: '_',
  })
});


function timer(){
  setTimeout(secTimer,)
}
let sec = 28;
function secTimer(){
  if(sec === 0){
    clearTimeout(secTimer);
  }else {
    sec--;
    $('.second').html(sec);
  }
} 