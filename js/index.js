<<<<<<< HEAD
// CARROSSEL DE IMAGENS

const imgs = document.getElementById('img-carrossel');
const img = document.querySelectorAll('#img-carrossel img');

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`;    
}

setInterval(carrossel, 4000);
=======
// CARROSSEL DE IMAGENS

const imgs = document.getElementById('img-carrossel');
const img = document.querySelectorAll('#img-carrossel img');

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`;    
}

setInterval(carrossel, 4000);
>>>>>>> 6639e138fa88974ff8c98570e553fb145c43194d
