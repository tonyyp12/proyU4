
// $(document).ready(function() {
//   $('.menu-toggle').click(function() {
//     $('nav').slideToggle();
//   });
// });      // Funcion para el boton subir
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});



$(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('nav').slideToggle();
    });
    
    $(window).resize(function() {
      if ($(window).width() > 390) {
        $('nav').removeAttr('style');
      }
    });
  });




        $(function() {
          $(".rslides").responsiveSlides();
        });

        new WOW().init();
      
        $(document).ready(function()
        {
            $('#slider1').tinycarousel();
        });
        
    // Inicializar FancyBox
    $(document).ready(function() {
      $("[data-fancybox='gallery']").fancybox({
        // Opciones adicionales de configuración de FancyBox
      });
    });

    function toggleCard(cardIndex) {
      var card = document.getElementsByClassName('card')[cardIndex - 1];
      card.classList.toggle('open');
    }
        
        