burger=document.querySelector('.burger')
navlist=document.querySelector('.nav-list')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
// scroll reveal 
window.sr=ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 2000,
    distance:'30rem',
    delay:150 

}) ;

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 2000,
    distance:'30rem',
    delay:150 

}) ;


