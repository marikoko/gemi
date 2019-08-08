// console.log('hallo');

const d = window.document,
    btnA = d.querySelector('#btnA'),
    btnB = d.querySelector('#btnB'),
    btnC = d.querySelector('#btnC'),
    btnD = d.querySelector('#btnD'),

    demoBtn = d.querySelector('#demo-btn'),

    brandType = d.querySelectorAll('.brand-type'),

    brandTypeAni = {
        'TypA': 'animate_a',
        'TypB': 'animate_b',
        'TypC': 'animate_c',
        'TypD': 'animate_d'
    };

// Beim Klicken des Buttons CSS-Klasse hinzufügen und dadurch Ani starten
animationStart = (btnTyp) => {
    console.log(btnTyp + " geklickt");
    demoBtn.classList.add(btnTyp);
    demoBtn.addEventListener('animationend', animationEnd(btnTyp));

    // btnB.addEventListener ('click', (e) => {
    //     console.log(btnB);
    //     demoBtn.classList.add('animate_b');
    //     console.log('class b added');
    //     demoBtn.addEventListener('animationend', animationEnd);
    // });
}


// nach Animationsende CSS-Klasse wieder entfernen / Ani beenden
animationEnd = (btnTyp, e) => {
    console.log(btnTyp);
    demoBtn.removeEventListener('animationend', function(){console.log('ende');});
    demoBtn.classList.remove(btnTyp);
    // console.log(btnTyp + ' removed');
    // switch(btnTyp) {
    //     case "btnA":
    //         demoBtn.classList.remove('btnA');
    //         console.log(btnTyp + ' removed');
    //         break;
    //     case "btnB":
    //         demoBtn.classList.remove('btnB');
    //         console.log(btnTyp + ' removed');
    //         break;
    //     case "btnC":
    //         demoBtn.classList.remove('btnC');
    //         console.log(btnTyp + ' removed');
    //         break;
    //     case "btnD":
    //         demoBtn.classList.remove('btnD');
    //         console.log(btnTyp + ' removed');
    //         break;
    //     default:
    //         console.log('Fehler');
    // }
    // return btnTyp;
}

// schauen welcher btn geklickt ist
whichBtn = () => {
    for(let i=0; i<brandType.length; i++) {
        brandType[i].addEventListener('click', function() {
            // console.log(brandType[i]);
            let btnTyp = brandType[i].id;
            console.log(btnTyp);
            //Ani aufrufen
            animationStart(btnTyp);
        });
    };
}

whichBtn();
// animation_obj = {
//  btn-typ1: [
//         {
//           name: "btn1",
//           color: [[50, 0], [0, 100], [100, 100]]
//         },
// }

