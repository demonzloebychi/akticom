const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');



if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
}