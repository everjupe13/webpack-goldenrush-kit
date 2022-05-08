window.addEventListener('load', () => {

    let cookie = document.getElementById('cookie-pop')
    let closeBtn = cookie.querySelector('#cookie-pop-close')
    let submitBtn = cookie.querySelector('#cookie-pop-submit')

    cookie.addEventListener('animationend', () => {
        cookie.classList.add('loaded')
    })

    closeBtn.addEventListener('click', () => {
        cookie.classList.add('closed')
        cookie.addEventListener('animationend', () => {
            cookie.style.opacity = '0'
        })
    })    

    submitBtn.addEventListener('click', () => {
        cookie.classList.add('closed')
        cookie.addEventListener('animationend', () => {
            cookie.style.opacity = '0'
        })
    })
})