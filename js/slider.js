$(document).ready(function(){

  // Seleccionando elementos en variables
  var slider = $('#slider');
  var btnAnterior = $('#btnAnterior');
  var btnSiguiente = $('#btnSiguiente');

  // Pasar la ultima imagen a primer lugar
  $('#slider .slide:last').insertBefore('#slider .slide:first');

  // Margenes negativos para mover a la izquierda y esconder
  slider.css('margin-left', '-43%');

  // Funcion para que se mueva a la derecha
  function moverDerecha() {
    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-105.6%'
      },700, function () {
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('margin-left', '-43%');
        resetInterval();
      });

    }
  }

  // Funcion mover a la izquierda
  function moverIzquierda(){
    if (!slider.is(':animated')){
      $('#slider .slide:last').insertBefore('#slider .slide:first');
      slider.css('margin-left', '-105.6%');
      slider.animate({
        marginLeft: '-43%'
      },700, function () {
        resetInterval();
      });
    }
  }

  btnSiguiente.on('click', moverDerecha);
  btnAnterior.on('click', moverIzquierda);

  // Mover slider dinamicamente
  var intervalo = setInterval(moverDerecha,5000);

  function resetInterval(){
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha,5000);
  }


});
