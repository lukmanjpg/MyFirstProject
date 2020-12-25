$(document).ready(function($) {
	$('.cat1').click(function(event) {
		$('.active__hold1').toggleClass('active');
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
// Обработка покупок





const URLS = {
  getGoods:'https://api.mocki.io/v1/423624c8'
}
let cart = {};
let datas = [];

getGoods();
checkCart();
showMiniCart();

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
  .then(data => showGoods(data))
}
let data;
function showGoods(data){
  datas = data;
  let out = '';
  for(let i = 0; i < data.length; i++){
       out += '<div class="price__item">';
       out += '<div class="price__img__holder">';
       out += '<img src="img/' + data[i].image + '" alt="">';
       out += '</div>';
       out += '<div class="price__item__holder">';
       out += '<div class="price__effect__too">';
       out += '<p class="price__item__name">'+ data[i].name +'</p>';
       out += '<p class="price__item__price">' + data[i].cost +' <span>kg</span></p>';
       out += '</div>';
       out += '<button class="price__item__button" data-id="'+ data[i].id +'">Купить</button>'
       out += '</div>';
       out += '</div>';
  }

  document.querySelector('.price__holder').innerHTML = out;
  let btns = document.querySelectorAll('.price__item__button');

  for(let i = 0; i<btns.length; i++){
       btns[i].addEventListener('click', addToCart);
  }
}

function addToCart(){
  let id = this.dataset.id;
  if(cart[id] === undefined){
    cart[id] = 1;
  } else {
    cart[id]++;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  checkCart();
showMiniCart();
}

function checkCart(){
  let result = localStorage.getItem('cart');
  if (result != null) {
    cart = JSON.parse(result);
  }
}
function showMiniCart(data){
  let out = '';
  let out2 = '';
  for(let p in cart){
    out += '<div class="lol">';
    out += p;
    out += '</div>';
    out2 += '<div class="lol">';
    out2 += cart[p];
    out2 += '</div>';
  }
  let header = document.querySelector('.b1');
  let header2 = document.querySelector('.b2');
    header.innerHTML = out;
    header2.innerHTML = out2;
    
}
console.log(cart);
// // 1 --- 5
// // 2 --- 10
// // 4 --- 5

// // {
// //  1: 2,
// //  2: 5,
// //  3: 3,
// //  4: 5
// // }
// console.log(cart);


// [{
//   "id":2,
//   "cost":80,
//   "name":"Болгарский перец",
//   "image":"bell_pepper.png",
//   "units":"kg",
//   "category":1,
//   "description":"red"
// },
// {"id":1,
// "cost":55,
// "name":"Клубника",
// "image":"strawberry.png",
// "units":"kg",
// "category":1,
// "description":"red"
// },
// {"id":3,
// "cost":15,
// "name":"banana",
// "image":"banana.jpg",
// "units":"kg",
// "category":1,
// "description":"red"
// },
// {"id":4,
// "cost":15,
// "name":"Зеленая Фасоль",
// "image":"green_bean.png",
// "units":"kg",
// "category":1,"description":"red"
// },
// {"id":4,
// "cost":15,
// "name":"Фиолетовая Капуста",
// "image":"purple.png",
// "units":"kg",
// "category":1,"description":"red"
// },
// {"id":4,
// "cost":15,
// "name":"Помидор",
// "image":"tomatos.png",
// "units":"kg",
// "category":1,"description":"red"
// },
// {"id":4,
// "cost":15,
// "name":"Брокколи",
// "image":"broccoli.png",
// "units":"kg",
// "category":1,"description":"red"
// },
// {"id":4,
// "cost":15,
// "name":"Морковь",
// "image":"Carrot.png",
// "units":"kg",
// "category":1,"description":"red"
// },
// {"id":4,
// "cost":15,
// "name":"Фруктовый сок",
// "image":"fruct__juice.png",
// "units":"kg",
// "category":1,"description":"red"
// },
// ];











// [
//    {
//       "id": 1,
//       "name":"Болгарский перец",
//       "cost":80,
//       "units":"kg",
//       "description":"red",
//       "image":"bell_pepper.png",
//       "category":1
//    },
//    {
//       "id": 2,
//       "name":"Клубника",
//       "cost":15,
//       "units":"kg",
//       "description":"red",
//       "image":"strawberry.png",
//       "category":1
//    },
//    {
//       "id": 3,
//       "name":"Зеленая Фасоль",
//       "cost":15,
//       "units":"kg",
//       "description":"red",
//       "image":"green_bean.png",
//       "category":1
//    },
//    {
//       "id": 4,
//       "name":"Фиолетовая Капуста",
//       "cost":15,
//       "units":"kg",
//       "description":"red",
//       "image":"purple.png",
//       "category":1
//    },
//    {
//       "id": 5,
//       "name":"Помидор",
//       "cost":15,
//       "units":"kg",
//       "description":"red",
//       "image":"tomatos.png",
//       "category":1
//    },
//    {
//       "id": 6,
//       "name":"Брокколи",
//       "cost":15,
//       "units":"kg",
//       "description":"red",
//       "image":"broccoli.png",
//       "category":1
//    },
//    {
//       "id": 7,
//       "name":"Морковь",
//       "cost":15,
//       "units":"kg",
//       "description":"red",
//       "image":"Carrot.png",
//       "category":1
//    },
//    {
//       "id": 8,
//       "name":"Фруктовый сок",
//       "cost":15,
//       "units":"kg",
//       "description":"red",
//       "image":"fruct__juice.png",
//       "category":1
//    }

// ]