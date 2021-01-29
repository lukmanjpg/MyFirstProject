
// Скролл до самого верху страницы
$(function(){
	$(window).scroll(function(){
  	if($(document).scrollTop()>($(window).height()) / 2){
    	$('.scroll').show();
    }else{
    	$('.scroll').hide();
    }
  });
  $('.scroll').click(function(){
  	$('html,body').animate({scrollTop: 0}, 1000);
  });
});

// Функция о успешной отправке формы
let accessWrap = document.querySelector('.access__wrap');
function accessModal(){
  accessWrap.classList.add('access__active');
  setTimeout(lol,2000)
  function lol(){
    accessWrap.classList.remove('access__active');
  }
}
// Функция о ошибке
let errorWrap = document.querySelector('.error__wrap');
function errorModal(){
  errorWrap.classList.add('error__active');
  setTimeout(lol,2000)
  function lol(){
    errorWrap.classList.remove('error__active');
  }
}
// Обработка формы

let formLogin = document.querySelector('.formLogin');
const URLS = {
  createData: 'https://reqres.in/api/users',
  getUsers: 'https://reqres.in/api/users'
}
let obj = {};
let reqElements = document.querySelectorAll('._req');
formLogin.onsubmit = function(){
  let index = 0;
  for (let i = 0; i<reqElements.length; i++) {
    reqElements[i].style.borderColor = '';
    let elementsName = reqElements[i].name;
    if (reqElements[i].value == '') {
        reqElements[i].style.borderColor = 'red';
        index++;
    }
    if(index === 0) {
      obj [elementsName] = reqElements[i].value;
    }
  }
  if(index === 0){
    callApiPost (obj);
  }
}


function callApiPost (data_object) {
  let options = {
    method: "POST",
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify ({data_object}) 
  }
  fetch (URLS.createData, options)
  .then (response => {
    if (response.ok) {
      return response.json ();
    }
    else {
      errorModal();
    }
  })
  .then (data => {
    if (data.id) {
      accessModal();
      console.log(obj);
    }
  })
}
window.onload = function(){ 
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
  scrollAnimation();
}
// Превращение шапки в фиксированную
$(window).on('scroll',function(){
    if($(window).scrollTop() >= $(window).height()){
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
