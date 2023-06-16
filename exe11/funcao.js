function media() {
let nom = window.prompt(`Qual é o nome do aluno`)
let n1 = Number(window.prompt(`qual foi a nota do primiro bimestre?`))
let n2 = Number(window.prompt(`qual foi a nota do segundo bimestre`))
let media=(n1+n2)/2
    let msg // cria uma variável e deixa ela vazia
    if (media >= 6) { // Se por acaso a média foi 6.0 ou mais.. 
    msg = 'Meus parabéns!'
    } else { // senão...
        msg = 'Estude um pouco mais!'
    }
    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>` // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha 😉
}
