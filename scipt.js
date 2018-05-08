document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



  
 var nav = document.getElementById('nav2');

window.onscroll = function(){

if(window.pageYOffset > 80){

  nav.style.background = "gray";
} else {
  nav.style.background = "transparent";
}

}


