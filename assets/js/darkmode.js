let imode = localStorage.getItem("isDark");

let bodyElement = document.getElementsByTagName('body')[0];
let navLogo = document.getElementsByClassName('nav-logo')[0];
let cards = document.getElementsByClassName('card');
let darklogo = document.getElementById('darkmodelogo')

function checkdark(){
  if(localStorage.getItem("isDark") == "true"){
    bodyElement.className += " " + "darkmode";
    navLogo.className += " " + "darkmode";
    for(let i = 0; i < cards.length; i++){
      cards[i].className += " " + "alt-background";
    }
    darklogo.src = "./assets/img/light_mode_white_24dp.svg"
    localStorage.setItem("isDark", true);
  }else{
    bodyElement.classList.remove('darkmode');
    navLogo.classList.remove('darkmode');
    for(let i = 0; i < cards.length; i++){
      cards[i].classList.remove('alt-background');
    }
    darklogo.src = "./assets/img/dark_mode_white_24dp.svg"
    localStorage.setItem("isDark", false);
  }
}

function darkmode(){
  if(localStorage.getItem("isDark") == "false"){
    bodyElement.className += " " + "darkmode";
    navLogo.className += " " + "darkmode";
    for(let i = 0; i < cards.length; i++){
      cards[i].className += " " + "alt-background";
    }
    darklogo.src = "./assets/img/light_mode_white_24dp.svg"
    localStorage.setItem("isDark", true);
  }else{
    bodyElement.classList.remove('darkmode');
    navLogo.classList.remove('darkmode');
    for(let i = 0; i < cards.length; i++){
      cards[i].classList.remove('alt-background');
    }
    darklogo.src = "./assets/img/dark_mode_white_24dp.svg"
    localStorage.setItem("isDark", false);
  }
}

