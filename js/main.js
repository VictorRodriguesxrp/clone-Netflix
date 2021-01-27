$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const watchNow = document.getElementById('buttonWatchNow')
const info = document.querySelector('#info')

watchNow.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=HlBYdiXdUa8&t=8s')
})

info.onclick = () => {
    window.open('https://pt.wikipedia.org/wiki/Brooklyn_Nine-Nine')
}