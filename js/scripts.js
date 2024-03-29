/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var listaProgramacao = Array.from(document.getElementById("programacao").children);
listaProgramacao.forEach(element => {
    element.children[0].addEventListener('mouseenter', colorir);
    element.children[0].addEventListener('mouseleave', descolorir);
    console.log(element.children[0]);
});

var listaBancos = Array.from(document.getElementById("bd").children);
listaBancos.forEach(element => {
    element.children[0].addEventListener('mouseenter', colorir);
    element.children[0].addEventListener('mouseleave', descolorir);
    console.log(element.children[0]);
});

var listaVersionamento = Array.from(document.getElementById("versionamento").children);
listaVersionamento.forEach(element => {
    element.children[0].addEventListener('mouseenter', colorir);
    element.children[0].addEventListener('mouseleave', descolorir);
    console.log(element.children[0]);
});

function colorir() {
    this.classList.add("colored");
}

function descolorir() {
    this.classList.remove("colored");
}