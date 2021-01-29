$('.burger-wrap').on('click',openBurgerMenu);
function openBurgerMenu(){
  console.log('djiasi')
  $('.burger-holder').toggleClass('burgerActive');
  $('.header-right').toggleClass('headerActive');
  if($('.burger-holder').hasClass('burgerActive')){
    $('.header-right').css({
      maxHeight: '',
    });  
  }else {
    $('.header-right').css({
      maxHeight: '0px',
    });
  }
  if($('.menu-dropdown').hasClass('menu-active')){
    $('.menu-dropdown').removeClass('menu-active');
  }
  
} 

function mediaDropdownToggle(){
    if ($(window).width() <= 992){
        $('.dropMenu').removeClass('dropdown-hover');
        $('.dropMenu').on('click',toggleDropdown);
        console.log('work')
        $(window).on('resize',changeWidth);
        changeWidth();
        $('.burger-wrap').on('click',openBurgerMenu);
    }
}
$(window).on('load', mediaDropdownToggle);
function toggleDropdown(){
  let height = document.querySelector('.header-right');
    $('.menu-dropdown').toggleClass('menu-active');
    if($('.menu-dropdown').hasClass('menu-active')){
        $('.header-right').css({
          maxHeight: '460px',
        });
    }else {
        $('.header-right').css({
          maxHeight: '',
        });
    }
}
function changeWidth(){
    $('.menu-dropdown').css({
      width: $('.header-right').width(),
    });
};
$(window).on('scroll',function(){
  if($(window).scrollTop() >= $(window).height()){
    $('.top').css({
        marginBottom: $('.header').outerHeight(),
    });
      $('.header').addClass('fixedHeader');
  }else {
      $('.top').css({
        marginBottom: '0',
      });
      $('.header').removeClass('fixedHeader'); 
  }
  console.log('worked')
})