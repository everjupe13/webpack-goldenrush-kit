let switcher = document.getElementById('lang-switcher')
let items = document.querySelectorAll('#lang-switcher .lang-switcher__item')
let currIndex = 0

items.forEach(el => {

    el.addEventListener('click', () => {
        if ((items.length - 1) > currIndex) {
            currIndex = currIndex + 1
        } else {
            currIndex = 0;
        }
        updateByIndex(items, currIndex)
    })
})


function updateByIndex(items, currIndex) {
    items.forEach(() => {
        deactivateAll(items)
    })

    items[currIndex].classList.add('active')

}

function deactivateAll(array) {
    array.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        }
    })
}

function activateOne(el) {
    if (!el.classList.contains('active')) {
        el.classList.add('active')
    }
}



window.addEventListener('load', () => {


    let maxWidth = Math.max(
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
    );

    if ((maxWidth <= (991 + 15))) {
       items.forEach((el) => {
           let val = el.getAttribute('data-short')
           el.textContent = val
       })
    }

})