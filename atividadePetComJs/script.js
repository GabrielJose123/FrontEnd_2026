const imagem = document.getElementById('imagem');

const estados = {
    morto: 'pandaMorto.png',
    bravo: 'pandaBravo.png'
};

let segundo = 0;

function controlar() {
    setInterval(() => {
        segundo++

        if (segundo == 30) { imagem.src = estados.bravo}

        if (segundo == 60) { imagem.src = estados.morto}

        console.log(segundo)
    }, 1000);
}

controlar();