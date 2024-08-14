document.addEventListener('DOMContentLoaded', function() {
    // Animar el logo
    anime({
      targets: '#logo',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutBounce'
    });
  
    // Animar el título
    anime({
      targets: '#titulo-texto',
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutExpo'
    });
  
    // Animar los botones
    anime({
      targets: '.botones',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200), // Animar cada botón con un retraso
      duration: 2000,
      easing: 'easeOutElastic(1, .8)'
    });
  
    // Animar el texto de salida
    anime({
      targets: '#salida',
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeInOutQuad'
    });

    anime({
        targets: `#Incriptador`,
        translateY:[-100 , 0],
        opacity: [0,1],
        duration:2000,
        easing:'easeOutElastic(1, .8)'


    })
  });
  
  anime({
    targets: `.hola`,
    translateY:[-100 , 0],
    opacity: [0,1],
    duration:2000,
    easing:'easeOutElastic(1, .8)'


})
anime({
  targets: `a`,
  translateY:[-100 , 0],
  opacity: [0,1],
  duration:2000,
  easing:'easeOutElastic(1, .8)'


})
anime({
  targets: `img`,
  translateY:[-100 , 0],
  opacity: [0,1],
  duration:2000,
  easing:'easeOutElastic(1, .8)'


})














