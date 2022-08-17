let showmenu = document.querySelector('.showmenu');
let header_nav_main = document.querySelector('.header-nav-main');
showmenu.addEventListener('click',function(){
    if(!header_nav_main.classList.contains('menu-show')){
        header_nav_main.classList.add('menu-show');
    }else{
        header_nav_main.classList.remove('menu-show');
    }
})

$('.carousel').carousel({
    interval: 2000
  })