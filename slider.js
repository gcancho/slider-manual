const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
// Obteniendo el ultimo elemento del slider
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

// Va a colocar al principio del slider el ultimo elemento del slider
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

const moverDerecha = () => {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition = "none";
        /* Antes de que termine el slider */
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

const moverIzquierda = () =>{
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition = "none";
        
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click',()=>{
    moverDerecha();
});
btnLeft.addEventListener('click',()=>{
    moverIzquierda();
});

setInterval(() => {
    moverDerecha();
}, 10000);