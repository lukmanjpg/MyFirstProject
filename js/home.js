// Блок с каталогами
let catalogItem = $('.catalog__item');
let catalogHover = $('.catalog__hover');
for(let i = 0;i<catalogItem.length;i++) {
  catalogItem[i].onclick = function(){
    for(let i = 0;i<catalogItem.length;i++) {
       catalogHover[i].classList.remove('active');
    };
    catalogHover[i].classList.add('active');
  }
};
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
// Обработка покупок





const URLS = {
  getGoods:'https://api.mocki.io/v1/423624c8'
}
let cart = {};
let datas = [];

getGoods();
checkCart();

function getGoods() {
  fetch(URLS.getGoods)
  .then(response => {
    if (response.ok) {
      return response.json(); 
    }
    else{
      alert('Error');
    }
  })
  .then(data => {
    datas = data;
    showGoods();
    showMiniCart();
  })
}
function showGoods(data){
  let out = '';
  for(let i = 0; i < datas.length; i++){
       out += '<div class="price__item">';
       out += '<div class="price__img__holder">';
       out += '<img src="img/' + datas[i].image + '" alt="">';
       out += '</div>';
       out += '<div class="price__item__holder">';
       out += '<div class="price__effect__too">';
       out += '<p class="price__item__name">'+ datas[i].name +'</p>';
       out += '<p class="price__item__price">' + datas[i].cost +' <span>kg</span></p>';
       out += '</div>';
       out += '<button class="price__item__button" data-id="'+ datas[i].id +'">Купить</button>'
       out += '</div>';
       out += '</div>';
  }

  document.querySelector('.price__holder').innerHTML = out;
  let btns = document.querySelectorAll('.price__item__button');

  for(let i = 0; i<btns.length; i++){
      btns[i].addEventListener('click', addToCart);
  }
  showMiniCart();
}

function addToCart(){
  let id = this.dataset.id;
  if(cart[id] === undefined){
    cart[id] = 1;
  } else {
    cart[id]++;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  showMiniCart();
}

function checkCart(){
  let result = localStorage.getItem('cart');
  if (result != null) {
    cart = JSON.parse(result);
  }
}


function showMiniCart(){
  let zero = 0;
  for(let key in cart){
    for(key2 in datas){
      if(datas[key2].id == key){
        zero += datas[key2].cost * cart[key];
      }
    }
  }
  $('.total-price').html(zero);
}
showMiniCart();
// Превращение шапки в фиксированную




$('.comments__hold').slick({
    slidesToShow:3,
    dots:true,
    arrows:false,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
})

$('.comments li button').html('')