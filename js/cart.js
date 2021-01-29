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
// Вывод продуктов из корзины
const URLS = {
  getGoods:'https://api.mocki.io/v1/423624c8'
}
let cart = {};
let datas = [];



checkCart();
getGoods();
function getGoods(){
  fetch(URLS.getGoods)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else {
      alert('error');
    }
  })
  .then(data => {
    datas = data;
    showMiniCart();
   showTotalCount(datas);
  })
}
function checkCart(){
  let result = localStorage.getItem('cart');
  if (result != null) {
    cart = JSON.parse(result);
  }else {
    alert('пусто');
  }
}
function showMiniCart(){
  let out = '';
  for(let key in cart){
    for(key2 in datas){
      if(datas[key2].id == key){
        out += '<div class="card__item">';
        out += '<div data-id="'+ key +'" class="remove__product">x</div>';
        out += '<div class="product__img-holder">';
        out += '<img src="img/' + datas[key2].image + '" alt="">'
        out += '</div>';
        out += '<div class="product__info">';
        out += '<p class="product__name">'+ datas[key2].name +'</p>';
        out += '<p class="product__describe">'+ datas[key2].units +'</p>';
        out += '</div>';
        out += '<p class="product__price">'+ datas[key2].cost +'</p>';
        out += '<input type="number" id="'+ key +'" class="count__price" value="'+ cart[key] +'" min="1" max="100">';
        out += '<p class="price__result">$<span class="total__price">'+  datas[key2].cost * cart[key] +'</span></p>'
        out += '</div>';
      }
    }
  }
  document.querySelector('.card__content').innerHTML = out;
  changeCountProduct();
  deleteProduct();
  TotalPrice();
}
function changeCountProduct(){
  let input = document.querySelectorAll('.count__price');
  for(let i = 0;i<input.length;i++){
    input[i].onchange = function(){
      let id = input[i].getAttribute('id');
      let num = Number(id);
      let valueNumber = Number(input[i].value);
      cart[num] = valueNumber;
      if (cart[num] < 1) {
        delete cart[num];
      }
      saveCartToLS();
      showMiniCart();
      TotalPrice();
      showTotalCount();
    }
  }
}
function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart) );
}
function deleteProduct(){
  let deleteButton = document.querySelectorAll('.remove__product');
  for(let i = 0;i<deleteButton.length;i++){
    deleteButton[i].onclick = function(){
      checkCart();
      let id = this.getAttribute('data-id');
      delete cart[id];
      saveCartToLS();
      showMiniCart();
      TotalPrice();
      showTotalCount();
    }
  }
}
let discount = document.querySelector('.discount__price');
let c = document.querySelector('.price__total');
let btnCart = document.querySelector('.promo-button');
let promoCodeInput = document.querySelector('.cupon-input');
function checkPromoCode(){
  btnCart.onclick = function(){
    promoCodes.forEach( function(element, index) {
      if(promoCodeInput.value === element.number){
        let calc = c.innerText / 100;
        let qw = c.innerText - calc * element.discount;
        c.innerHTML = qw;
        btnCart.disabled = true;
        discount.innerText = element.discount;
      }
    })
  }
}
function TotalPrice(){
  let zero = 0;
  for(let key in cart){
    for(key2 in datas){
      if(datas[key2].id == key){
        zero += datas[key2].cost * cart[key];
      }
    }
  }
  c.innerHTML = zero;
  checkPromoCode();
}
TotalPrice();
function showTotalCount(){
  let zero = 0;
  for(let key in cart){
      for(key2 in datas){
        if(datas[key2].id == key){
          zero += datas[key2].cost * cart[key];
       }
     }
    }
  document.querySelector('.total-price').innerHTML = zero;
  document.querySelector('.product__total__price').innerHTML = zero;
}
showTotalCount();
let promoCodes = [
  {number:'2020', discount:40},
  {number:'3030', discount:90},
  {number:'1212', discount:20},
  {number:'9090', discount:10},
]

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
