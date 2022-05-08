
import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
Swiper.use([Autoplay, Navigation]);



window.addEventListener('load', () => {

    let maxWidth = Math.max(
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
    );

    if (!(maxWidth <= (991 + 15))) {
        const posts = new Swiper('#gallery-blog-swiper', {
            // autoplay: {
            //     delay: 2000,
            //     disableOnInteraction: false,
            // },
            loop: true,
            navigation: {
                prevEl: '#gallery-blog-swiper .swiper-button-prev',
                nextEl: '#gallery-blog-swiper .swiper-button-next',
            },
            spaceBetween: 28,
            slidesPerView: 3,

        })
        const cases = new Swiper('#gallery-cases-swiper', {
            // autoplay: {
            //     delay: 2000,
            //     disableOnInteraction: false,
            // },
            loop: true,
            navigation: {
                prevEl: '#gallery-cases-swiper .swiper-button-prev',
                nextEl: '#gallery-cases-swiper .swiper-button-next',
            },
            spaceBetween: 28,
            slidesPerView: 3,

        })
    } else {
        if (document.querySelector('#gallery-cases-swiper .swiper-wrapper')) {
            let cases = document.querySelectorAll('#gallery-cases-swiper .swiper-slide')

            cases.forEach((el, index) => {
                if (index > 2) {
                    el.remove()
                }
            })
        }

        if (document.querySelector('#gallery-blog-swiper .swiper-wrapper')) {
            let blogs = document.querySelectorAll('#gallery-blog-swiper .swiper-slide')

            blogs.forEach((el, index) => {
                if (index > 2) {
                    el.remove()
                }
            })
        }
    }
})