const enleHamburger = document.querySelector('.enle-hamburger'),
    enleHamburgerText = document.querySelector('.enle-hamburger-text'),
    enleTopline = document.querySelector('.enletopline'),
    enleMidline = document.querySelector('.enlemidline'),
    enleBotline = document.querySelector('.enlebotline');

enleHamburger.addEventListener('click', function(){
    enleTopline.classList.toggle('animate-line1');
    enleMidline.classList.toggle('animate-line2');
    enleBotline.classList.toggle('animate-line3');
    enleHamburgerText.classList.toggle('animate-text');
})