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
