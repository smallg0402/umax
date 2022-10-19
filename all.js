
let showmenu = document.querySelector('.showmenu');
let header_nav_main = document.querySelector('.header-nav-main');
showmenu.addEventListener('click',function(){
    if(!header_nav_main.classList.contains('menu-show')){
        header_nav_main.classList.add('menu-show');
    }else{
        header_nav_main.classList.remove('menu-show');
    }
})

function sendEmail(){
    Email.send({
        SecureToken : "af9f143a-aa7b-4ebd-a67a-e36c5def447f",
        To : 'lovebian1103@gmail.com',
        From : "UMAX<umax@umax.tw>",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


