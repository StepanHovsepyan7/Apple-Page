'use strict';
let menuA = document.querySelector('.menuA');
let nav  = document.querySelector('.nav');
let fabars = document.getElementsByClassName('fa-bars')[0];


menuA.addEventListener('click',()=>{
    nav.classList.toggle('menuOpen');
    if(fabars.classList.contains('fa-bars')){
        fabars.classList.remove('fa-bars');
        fabars.classList.add('fa-x');
    }else{
        fabars.classList.remove('fa-x');
        fabars.classList.add('fa-bars');
    }
})

