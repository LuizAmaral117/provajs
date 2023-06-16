function contaar() {
    let saida = document.getElementById('saida')
    saida.innerHTML += `<h2>contando de 1 até 10,marcando os pares</h2>`
    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0) {
    saida.innerHTML +=` <mark><stong> ${cont}  </stong></mark>&#x1f449;`}
     else {saida.innerHTML +=`${cont} `}
    cont ++ 
    }
        saida.innerHTML += `&#x1F3C1`
    }