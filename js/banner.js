$(document).ready(function() {

  var banner = $('#banner');
  // Altura dinamica el Banner
  function alturaBanner(){
    var vpaltura = $(window).height();
    banner.css('height' , vpaltura);
  }

  alturaBanner();

  $(window).resize(alturaBanner);
});
