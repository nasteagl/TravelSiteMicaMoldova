// document.addEventListener("DOMContentLoaded",function(){
//     var footer = document.querySelector("footer");
//     var scroll_threshold=200;  /* determina cât de aproape de sfârșitul paginii trebuie să ajungă utilizatorul înainte ca footer-ul să devină vizibil.*/
//     var last_scrollY=0;//pentru a determina direcția de scroll a utilizatorului (în sus sau în jos) comparând poziția curentă de scroll cu cea anterioară (lastScrollY
    
//     function footerVisibility(){
//         /*verifica daca user-ul face scroll pana la partea de jos a paginii*/
//         var curr_scrollY=window.scrollY;
//         if(curr_scrollY>last_scrollY && curr_scrollY >= document.body.offsetHeight-window.innerHeight - scroll_threshold){
//             footer.classList.add("footer-visible");
//         }else{
//             footer.classList.remove("footer-visible");
//         }
//         last_scrollY=curr_scrollY
//     }
//     window.addEventListener("scroll",footerVisibility);
//   /* verificare daca la incarcarea paginii footreul este ascund initial */
//     footer.classList.remove("footer-visible");
// })


document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var lastScrollY = window.scrollY;

    function toggleHeaderVisibility() {
        var currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
           
            header.classList.add('header_hidden');
        } else {
           
            header.classList.remove('header_hidden');
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", toggleHeaderVisibility);
});

document.addEventListener("DOMContentLoaded", function() {
    // Funcția pentru scroll la începutul paginii
    function backToTop() {
        window.scrollTo(0, 0); // Face scroll direct la poziția (0, 0)
    }

    //  event listener pentru butonul "Back to Top"
    var backToTopButton = document.getElementById('back_to_top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', backToTop);
    }
});

