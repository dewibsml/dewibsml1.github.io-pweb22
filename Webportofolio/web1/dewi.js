$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$('#menu li a').removeClass('active');
      $(this).addClass('active');
      
      var href = $(this).attr('href');
      $('#About>div').hide();
      
      $(href).show();
            
      if(currentSection == 0){
          $('#seleksi').slideToggle(200);
          currentSection = href;
      }else if(currentSection == href){
           $('#seleksi').slideToggle(200);
           currentSection = 0;    
      }else{
          currentSection = href;
      }
      return false;
  });
});
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
