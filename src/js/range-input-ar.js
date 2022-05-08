// For arabic version
function normalize(item) {

    let x = item.value;
    let normalize = x / item.max * 100;
    let gradient = `linear-gradient(90deg, #E1E1E1 ${normalize}%, #339DCC ${normalize}%)`;
    item.style.background = gradient;

    return true;

}

window.addEventListener('load', () => {

    let slider = document.querySelectorAll('.range-input__input');

    slider.forEach((item) => {

        normalize(item);

        let output = item.parentElement.children[0].children[2].children[0];
        output.innerHTML = item.value;
        output.parentElement.style.left = `${parseInt(item.value, 10) / item.max * 100}%`;

        item.oninput = () => {

            output.innerHTML = item.value; 
            output.parentElement.style.left = `${parseInt(item.value, 10) / item.max * 100}%`;

        };

        item.addEventListener('mousemove', () => {

            let x = item.value;
            let normalize = x / item.max * 100;
            let gradient = `linear-gradient(90deg, #E1E1E1 ${normalize}%, #339DCC ${normalize}%)`;
            item.style.background = gradient;
            
        });

        item.addEventListener('touchmove', () => {

            let x = item.value;
            let normalize = x / item.max * 100;
            let gradient = `linear-gradient(90deg, #E1E1E1 ${normalize}%, #339DCC ${normalize}%)`;
            item.style.background = gradient;
            
        });

    });

});