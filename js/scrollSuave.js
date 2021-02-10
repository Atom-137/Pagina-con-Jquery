$(document).ready(function () {

  // Mostrar/ocultar el boton volver arriba
  var btnVolverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function(){

    var proyectosOffsetTop = $('#proyectos').offset().top;

    if ($(window).scrollTop() >= proyectosOffsetTop) {

        btnVolverArriba.css('margin-right', 0);

    }else if ($(window).scrollTop() <= proyectosOffsetTop/2){

        btnVolverArriba.css('margin-right', '-60px');
    }
  })

  // Scroll suave para inicio y volver arriba

  $('a.volver-arriba').on('click', function(e){

    e.preventDefault();

    if ($(window).scrollTop() != 0) {
      $('html,body').stop().animate({scrollTop: 0},1000);

    }
  })

// Scroll suave para los demas items
    $('a.scroll-suave').on('click', function(e){
      e.preventDefault();
      var seccionOffsetTop = $($(this).attr('href')).offset().top;
      $('html,body').stop().animate({scrollTop: seccionOffsetTop},1000);

    })
    $('a.scroll-acercaDe').on('click', function(e){
      e.preventDefault();
      var seccionOffsetTop = $($(this).attr('href')).offset().top-122;
      $('html,body').stop().animate({scrollTop: seccionOffsetTop},1000);

    })
    $('a.scroll-equipo').on('click', function(e){
      e.preventDefault();
      var seccionOffsetTop = $($(this).attr('href')).offset().top-68;
      $('html,body').stop().animate({scrollTop: seccionOffsetTop},1000);

    })

})
