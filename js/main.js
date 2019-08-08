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
animationStart = () => {
    btnA.addEventListener ('click', (e) => {
        console.log(btnA);
        demoBtn.classList.add('animate_a');
        console.log('class a added');
        demoBtn.addEventListener('animationend', animationEnd);
    });
    btnB.addEventListener ('click', (e) => {
        console.log(btnB);
        demoBtn.classList.add('animate_b');
        console.log('class b added');
        demoBtn.addEventListener('animationend', animationEnd);
    });
    btnC.addEventListener ('click', (e) => {
        console.log(btnC);
        demoBtn.classList.add('animate_c');
        console.log('class c added');
        demoBtn.addEventListener('animationend', animationEnd);
    });
    btnD.addEventListener ('click', (e) => {
        console.log(btnD);
        demoBtn.classList.add('animate_d');
        console.log('class d added');
        demoBtn.addEventListener('animationend', animationEnd);
    });
}

// animationStart();

// nach Animationsende CSS-Klasse wieder entfernen / Ani beenden
animationEnd = (e) => {
    demoBtn.removeEventListener('animationend', animationEnd);
    demoBtn.classList.remove('animate_a');
    console.log('class removed');
}

// schauen welcher btn geklickt ist
for(let i=0; i<brandType.length; i++) {
    brandType[i].addEventListener('click', function() {
        console.log(brandType[i]);
        let btnTyp = brandType[i];
        console.log(btnTyp);
        return btnTyp;
        // if(brandType[i].innerHTML === 'TypA') {
        //     console.log('TypA geklickt');
        //     animationStart('TypA');
        // } else if (brandType[i].innerHTML === 'TypB') {
        //     console.log('TypB geklickt');
        //     animationStart('TypB');
        // } else if (brandType[i].innerHTML === 'TypC') {
        //     console.log('TypC geklickt');
        //     animationStart('TypC');
        // } else {
        //     console.log('TypD geklickt');
        //     animationStart('TypD');
        // }
    });
};

// for (var prop in brandType) {
//     console.log(brandType[prop]);
// }

// button_array = {
//     btn-typ1: [
//         {
//           name: "btn1",
//           color: [[50, 0], [0, 100], [100, 100]]
//         },
// }

