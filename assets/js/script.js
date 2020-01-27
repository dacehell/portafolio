$(document).ready(function() {

    $(function() {
      $("a").click(function(event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          var gato = this.hash;
          var diferencial = 0;
  
          if (this.hash == "#experiencia") {
            diferencial = 76;
          }
  
          if (this.hash == "#trabajos") {
            diferencial = 75;
          }
  
          if (this.hash == "#acercademi") {
            diferencial = 62;
          }
          if (this.hash == "#contacto") {
            diferencial = 0;
          }
          $("html, body").animate({
            scrollTop: $(gato).offset().top - diferencial
          }, 800);
        }
      });
      $('[data-toggle="popover"]').popover();
    });
});