$(function(){
  $('.header-main-menu').children('.header-main-list').hover(function(){
    $(this).children('ul').stop().slideToggle(100);
  });
});
