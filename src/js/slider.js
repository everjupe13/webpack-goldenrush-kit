function initSlider(object) {

    function changeCurrentControl(index) {

        controls.forEach((node) => {
            if (node.classList.contains('current')) {
                node.classList.remove('current');
            }
        });

        if (controls[index]) {
            controls[index].classList.add('current'); 
        } else {
            controls[controls.length - 1].classList.add('current'); 
        }
        

    }

    let slider = object.slider;
    let controls = object.controls;
    let sliderItemWidth = slider.children[0].offsetWidth;
    let scrolled, currentIndex;

    slider.addEventListener('touchend', (e) => {

        setTimeout(() => {

            scrolled = slider.scrollLeft;
            currentIndex = Math.round(scrolled / sliderItemWidth);

            changeCurrentControl(currentIndex);;

        }, 500);        

    });

}

window.addEventListener('load', () => {

    let slider1 = {
        slider: document.getElementById('slider'),
        controls: document.querySelectorAll('#slider-controls-promote .promote__controls__item'),
    }
    let slider2 = {
        slider: document.getElementById('slider2'),
        controls: document.querySelectorAll('#slider-controls-catalog .catalog__controls__item'),
    }
    let slider3 = {
        slider: document.getElementById('slider3'),
        controls: document.querySelectorAll('#slider-controls-privilege .privilege__controls__item'),
    }
    let slider4 = {
        slider: document.getElementById('slider4'),
        controls: document.querySelectorAll('#slider-controls-cost .cost__controls__item'),
    }
    let slider5 = {
        slider: document.getElementById('slider5'),
        controls: document.querySelectorAll('#slider-controls-explore .explore__controls__item'),
    }

    initSlider(slider1);
    initSlider(slider2);
    initSlider(slider3);
    initSlider(slider4);
    initSlider(slider5);


});