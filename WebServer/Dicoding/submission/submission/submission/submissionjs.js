const hamburger = document.querySelector('.hamburger')
const sideBar = document.querySelector('.sidebar')
const hideBar = document.querySelectorAll('nav .sidebar li a')


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    sideBar.classList.toggle('active')
})

hideBar.forEach(function(element){
    element.addEventListener('click', () =>{
        sideBar.classList.add('active')
        hamburger.classList.remove('active')
    })
})


const kirim = document.querySelector('.button')

onsubmit="setTimeout(function () { window.location.reload(); }, 10)"


// let anak = document.querySelector('article .main').childElementCount
let galeri = document.querySelector('.image-gallery').childElementCount
