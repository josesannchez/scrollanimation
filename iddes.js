const container = document.getElementById('statsContainer');
let isScrolling = false;
let scrollInterval;
let slideWidth = 100; // Ancho de cada slide en píxeles
let slideDuration = 1000 // Duración de cada slide en milisegundos

function startAutoScroll() {
    if (!isScrolling) {
        isScrolling = true;
        container.style.overflowX = 'hidden'; // Oculta la barra de desplazamiento horizontal
        
        const totalSlides = container.scrollWidth / slideWidth;
        let currentSlide = 0;

        scrollInterval = setInterval(() => {
            if (currentSlide < totalSlides - 1) {
                container.scrollBy({
                    left: slideWidth,
                    behavior: 'smooth'
                });
                currentSlide++;
            } else {
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
                currentSlide = 0;
            }
        }, slideDuration);
    }
}

 function stopAutoScroll() {
    clearInterval(scrollInterval);
    container.style.overflowX = 'auto'; // Restablece el desplazamiento horizontal
    isScrolling = false;
}

// Inicia el auto scroll cuando se carga completamente la página
window.addEventListener('load', startAutoScroll);

// Agrega un event listener para clics en el contenedor
container.addEventListener('click', (event) => {
    // Verifica si el clic fue en un elemento específico dentro del contenedor
    if (event.target.classList.contains('card')) {
        // Detiene el desplazamiento automático
        stopAutoScroll();
    }
});

    

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las tarjetas
    const cards = document.querySelectorAll('.card');

    // Añade eventos de click a cada tarjeta
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Añade la clase 'active' para activar la animación
            card.classList.add('active');

            // Quita la clase 'active' después de 500ms para que la animación pueda repetirse
            setTimeout(() => {
                card.classList.remove('active');
            }, 1000); // Ajusta el tiempo según la duración de tu animación
        });
    });
});


// Selecciona todas las imágenes que pueden ser ampliadas
const zoomableImages = document.querySelectorAll('.zoomable-image');

zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});




        $(document).ready(function(){
            $(window).bind('scroll', function() {
            var navHeight = $( window ).height() - 70;
                  if ($(window).scrollTop() > navHeight) {
                      $('nav').addClass('fixed');
                  }
                  else {
                      $('nav').removeClass('fixed');
                  }
             });
         });
     

      

        
           // Author: Hoang Tran (https://www.facebook.com/profile.php?id=100004848287494)
           // Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html
     
           // You can change global variables here:
           var radius = 240; // how big of the radius
           var autoRotate = true; // auto rotate or not
           var rotateSpeed = -60; // unit: seconds/360 degrees
           var imgWidth = 120; // width of images (unit: px)
           var imgHeight = 170; // height of images (unit: px)
     
       
           // ===================== start =======================
           setTimeout(init, 100);
     
           var odrag = document.getElementById("drag-container");
           var ospin = document.getElementById("spin-container");
           var aImg = ospin.getElementsByTagName("img");
           var aEle = [...aImg]; // combine 2 arrays
     
           // Size of images
           ospin.style.width = imgWidth + "px";
           ospin.style.height = imgHeight + "px";
     
           // Size of ground - depend on radius
           var ground = document.getElementById("ground");
           ground.style.width = radius * 3 + "px";
           ground.style.height = radius * 3 + "px";
     
           function init(delayTime) {
             for (var i = 0; i < aEle.length; i++) {
               aEle[i].style.transform =
                 "rotateY(" +
                 i * (360 / aEle.length) +
                 "deg) translateZ(" +
                 radius +
                 "px)";
               aEle[i].style.transition = "transform 1s";
               aEle[i].style.transitionDelay =
                 delayTime || (aEle.length - i) / 4 + "s";
             }
           }
     
           function applyTranform(obj) {
             // Constrain the angle of camera (between 0 and 180)
             if (tY > 180) tY = 180;
             if (tY < 0) tY = 0;
     
             // Apply the angle
             obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
           }
     
           function playSpin(yes) {
             ospin.style.animationPlayState = yes ? "running" : "paused";
           }
     
           var sX,
             sY,
             nX,
             nY,
             desX = 0,
             desY = 0,
             tX = 0,
             tY = 10;
     
           // auto spin
           if (autoRotate) {
             var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
             ospin.style.animation = `${animationName} ${Math.abs(
               rotateSpeed
             )}s infinite linear`;
           }
     
         
     
           // setup events
           document.onpointerdown = function(e) {
             clearInterval(odrag.timer);
             e = e || window.event;
             var sX = e.clientX,
               sY = e.clientY;
     
             this.onpointermove = function(e) {
               e = e || window.event;
               var nX = e.clientX,
                 nY = e.clientY;
               desX = nX - sX;
               desY = nY - sY;
               tX += desX * 0.1;
               tY += desY * 0.1;
               applyTranform(odrag);
               sX = nX;
               sY = nY;
             };
     
             this.onpointerup = function(e) {
               odrag.timer = setInterval(function() {
                 desX *= 0.95;
                 desY *= 0.95;
                 tX += desX * 0.1;
                 tY += desY * 0.1;
                 applyTranform(odrag);
                 playSpin(false);
                 if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                   clearInterval(odrag.timer);
                   playSpin(true);
                 }
               }, 17);
               this.onpointermove = this.onpointerup = null;
             };
     
             return false;
           };
     
           document.onmousewheel = function(e) {
             e = e || window.event;
             var d = e.wheelDelta / 20 || -e.detail;
             radius += d;
             init(1);
           };
     


         document.addEventListener("DOMContentLoaded", function () {
            const sections = document.querySelectorAll('.scroll-section');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
        
            sections.forEach(section => {
                observer.observe(section);
            });
        });
        
        document.addEventListener('DOMContentLoaded', function () {
          const links = document.querySelectorAll('nav ul li a');
          const sections = document.querySelectorAll('.scroll-section');
      
          // Scroll suave al hacer clic en los enlaces de navegación
          for (const link of links) {
              link.addEventListener('click', function (e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href').substring(1);
                  const targetElement = document.getElementById(targetId);
      
                  window.scrollTo({
                      top: targetElement.offsetTop - document.querySelector('nav').offsetHeight, // Ajusta la posición para tener en cuenta el nav fijo
                      behavior: 'smooth'
                  });
              });
          }
      
          // Función para comprobar si una sección está en el viewport
          const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
    
        // Añadir la clase visible a las secciones que están en el viewport
        const handleScroll = () => {
            for (const section of sections) {
                if (isInViewport(section)) {
                    section.classList.add('visible');
                }
            }
        };
    
        // Ejecutar handleScroll al cargar la página y al hacer scroll
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamar una vez para asegurar que las secciones visibles al cargar se animen
    });
    
