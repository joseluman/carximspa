// Web desarrollada por Teknolabs.cl

window.onload = () => {
    topbarSlide();
    bannerSlide();
    sendcContactForm();
}


// Carruseles topbar
const topbarSlide = () => {
    const swiper = new Swiper('.topbar', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 4000,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
}
// Carrusel banner superior
const bannerSlide = () => {
    const swiper = new Swiper('.slider-banner', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
}
// Validación de formulario
const sendcContactForm = () => {
    const btn = document.getElementById('button');
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'service_ytwjh3p';
    const templateID = 'template_0vwzsxn';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Enviar';
        console.log('se envió')
        //alert('Sent!');
        }, (err) => {
        btn.value = 'Enviar';
        console.log('error al enviar datos:', JSON.stringify(err))
        //alert(JSON.stringify(err));
        });
    });
}
// Sweetalert formulario


