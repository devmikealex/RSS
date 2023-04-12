const menuBtn = document.querySelector('#menu-btn')
const menuImg = document.querySelector('#menu-btn > img')
const navMenu = document.querySelector('#nav-menu')

menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.toggle('opened')) {
        // menuImg.src = './assets/icons/close.svg'
        // navMenu.style.display = 'flex'
        navMenu.classList.add('big')
        setTimeout(() => {
            navMenu.classList.add('fade-in')
        }, 0)
    } else {
        // menuImg.src = './assets/icons/burger.svg'
        closeNavMenu()
    }
})

const navLinks = document.querySelectorAll('.nav-links__item')
navLinks.forEach((link) => {
    link.addEventListener('click', closeNavMenu)
})

function closeNavMenu(params) {
    // navMenu.style.display = null
    navMenu.classList.remove('fade-in')
    setTimeout(() => {
        navMenu.classList.remove('big')
        menuBtn.classList.remove('opened')
    }, 300)
}
