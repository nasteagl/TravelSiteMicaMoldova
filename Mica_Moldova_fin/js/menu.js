const menu_open = document.querySelector('#enter_menu_btn')
const menu = document.querySelector('.container_menu')
const menu_exit = document.querySelector('#menu_leave_btn')

menu_open.addEventListener('click', (e) => {
    e.preventDefault()
    menu.style.right = '0'
    menu_open.classList.toggle = 'hidden'
})

menu_exit.addEventListener('click', (e) => {
    e.preventDefault()
    menu.style.right = '-40%'
    menu_open.classList.toggle = 'hidden'
})

setTimeout(function(){
    document.body.className="";
},500);