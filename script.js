const menu=document.querySelector('.menu');
const navBar=document.querySelector('.navbar-right');
menu.addEventListener('click',()=>{
    navBar.classList.toggle('active');
})
