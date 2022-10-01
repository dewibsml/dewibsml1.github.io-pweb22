$(function(){
  $('.SlideDownMenu').on('click', '.MenuTab', function () {
    $('nav').slideToggle('fast');
    return false;
  });
});
