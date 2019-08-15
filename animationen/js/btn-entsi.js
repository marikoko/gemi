console.log('hallo');

animateButton = (e) => {
    // console.log('geklickt');

    // btn.classList.toggle('animate');
    e.preventDefault;

    //reset animation
    const entsiBtnAni = document.querySelector('#entsiBtn-ani');
    entsiBtnAni.classList.remove('animate');
    
    console.log('entfernt');
    entsiBtnAni.classList.add('animate');
    console.log('dazu');
    
    // e.target.classList.add('animate');
    // console.log('dazu2');
    setTimeout(function(){
      entsiBtnAni.classList.remove('animate');
      console.log('entfernt nach time');
    },6000);

    //reset animation
    // e.target.classList.remove('animate');

    // console.log('entfernt');
    // e.target.classList.add('animate');
    // console.log('dazu');
    
    // e.target.classList.add('animate');
    // console.log('dazu2');
    // setTimeout(function(){
    //   e.target.classList.remove('animate');
    //   console.log('entfernt nach time');
    // },6000);
  };

const btn = document.querySelector("#entsiBtn");

btn.addEventListener('click', animateButton, false);


// const btnC = document.querySelector("#btn-C"),
//     btnTextC = document.querySelector('#btn-text-C');

// btnC.addEventListener('click', animateButton, false);
