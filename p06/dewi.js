$(document).ready(function() {
  var currentSection = 0;
  $('#sub').hide();
  $('#menu li a').click(function() {       
      
      $('#menu li a').removeClass('active');
      $(this).addClass('active');
      
      var href = $(this).attr('href');
      $('#producttype>div').hide();
      
      $(href).show();
            
      if(currentSection == 0){
          $('#sub').slideToggle(200);
          currentSection = href;
      }else if(currentSection == href){
           $('#sub').slideToggle(200);
           currentSection = 0;    
      }else{
          currentSection = href;
      }
      return false;
  });
});
