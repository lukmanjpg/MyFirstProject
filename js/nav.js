$('.burger-wrap').on('click',function(){
	$('.burger-holder').toggleClass('burgerActive');
	$('.header-right').toggleClass('headerActive');
	console.log('worked')
})
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
});
mediaDropdownToggle();
function mediaDropdownToggle(){
    if ($(window).width() <= 992){
        $('.dropMenu').removeClass('dropdown-hover');
        $('.dropMenu').on('click',toggleDropdown);
    }
}
function toggleDropdown(){
  let height = document.querySelector('.header-right');
    $('.menu-dropdown').toggleClass('menu-active');
}