window.addEventListener('load', () => {

    function switchVisibility(element) {
        element.classList.toggle('show');
    }
    
    function filterCountries() {

        let filter, spans;

        filter = search.value.toUpperCase();        
        spans = list.getElementsByTagName('span');

        for (let i = 0; i < spans.length; i++) {
            if (spans[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                spans[i].parentElement.style.display = "";
            } else {
                spans[i].parentElement.style.display = "none";
            }
        }

    }

    function selectCountry(node) {

        let currentCountry = node.children[1].innerHTML;
        let iconSrc = node.children[0].src;
        
        choosedInput.value = currentCountry;
        choosedInputImg.src = iconSrc;
        choosedInputImg.style.setProperty('display', 'block');
        choosedInputImg.style.setProperty('margin-right', '16px');

    }

    const button = document.getElementById('select-input-beacon');
    const dropdown = document.getElementById('select-input-dropdown');
    const search = document.getElementById('select-input-search');
    const list = document.getElementById('select-input-list');
    const choosedInput = document.getElementById('select-input-choosed');
    const choosedInputImg = document.getElementById('select-input-choosed-icon');
    const countries = document.querySelectorAll('#select-input-list .select-input__dropdown__item')
    
    countries.forEach((current) => {
        current.onclick = () => {
            selectCountry(current);
        };
    });

    button.addEventListener('click', () => {
        switchVisibility(dropdown);
    });
    
    window.addEventListener('click', (e) => {

        if ((!e.target.matches('#select-input-beacon')) && (!e.target.matches('#select-input-dropdown')) && (!e.target.matches('#select-input-search'))) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }

    });

    search.addEventListener('keyup', () => {
        filterCountries();
    });

});