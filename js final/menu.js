let burgermenu = document.querySelector('.menuburger');
let menu = document.querySelector('.Menu');
burgermenu.addEventListener('click', function(){
    burgermenu.classList.toggle('close')
    menu.classList.toggle('close')
})

