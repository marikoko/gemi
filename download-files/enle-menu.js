const enleHamburger = document.querySelector('.enle-hamburger'),
    enleTopline = document.querySelector('.enletopline'),
    enleMidline = document.querySelector('.enlemidline'),
    enleBotline = document.querySelector('.enlebotline'),

    enleHamburgerText = document.querySelector('enle-hamburger-text');

enleHamburger.addEventListener('click', function(){
    enleTopline.classList.toggle('animate-line1');
    enleMidline.classList.toggle('animate-line2');
    enleBotline.classList.toggle('animate-line3');
})