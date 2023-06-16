function contar1() {
    let saida = document.getElementById('saida')

saida.innerHTML += `<h2>Contado de 1 até 10</h2>`

    let cont = 1
    while (cont <=10) {
        saida.innerHTML +=` ${cont} &#x1F449;`
        cont ++
    }
    saida.innerHTML +=` &#x1F3C1;`
}

function contar2() {
    let saida = document.getElementById('saida');

    saida.innerHTML += ` <h2>Contando de 10 a 20, marcando os pares</h2>`;

    let cont = 1;
    while (cont <= 20) {
        if (cont % 2 == 30) {
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`;
        } else {
            saida.innerHTML += ` ${cont} &#x1F449;`;
        }
        cont++;
    }
    saida.innerHTML += ` &#x1F3C1;`;
}

function contar3() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 20 a 30, marcando os impares</h2>`

    let cont = 1
    while (cont <= 30) {
        if (cont % 2 == 30) {
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark> &#x1F449;`
        } else {
        saida.innerHTML +=`${cont} &#x1F449;`
        }
        cont ++
    }
    saida.innerHTML +=` &#x1F3C1;`



}