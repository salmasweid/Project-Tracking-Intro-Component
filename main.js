const menuBtn = document.querySelector('.btn-menu')
const closeBtn = document.querySelector('.btn-close')
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none'
    menu.style.display = 'block'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    menuBtn.style.display = 'block'
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
})