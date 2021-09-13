let btnMobile = document.querySelector('#btnMobile');

function openMenu(){
    let menu = document.querySelector('#menu');
    let buttonOpen = document.querySelector("#buttonMenu")
    let buttonClose = document.querySelector('#buttonClose')
    menu.classList.toggle('active');
    buttonOpen.classList.toggle('active')
    buttonClose.classList.toggle('active')
}


btnMobile.addEventListener("click",openMenu);