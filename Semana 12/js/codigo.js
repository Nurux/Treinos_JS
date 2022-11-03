let nomes = [];

function limpa_tela(){
    let resp = document.querySelector('#vetor')
    let resp1 = document.querySelector('.resp')

    resp1.innerHTML = ' '
    resp.outerHTML = " "
}

function mostrar_vetor(){
    let mostrar = document.createElement('div')
    let resp = document.querySelector('.resp')

    mostrar.setAttribute('id', 'vetor')

    for(let i = 0; i < nomes.length; i ++){
        mostrar.innerHTML += `${i+1} - ${nomes[i][0]} - ${nomes[i][1]} - ${nomes[i][2]}<br>`
    }

    document.body.insertBefore(mostrar, resp)   
}

function option_alter(index){
    let resp = document.querySelector('.resp')
    let div = document.createElement('div')
    let text = document.createElement('h3')
    text.innerHTML = 'Escoha o que deseja alterar'

    let button_name = document.createElement('button')
    let button_age = document.createElement('button')
    let button_email = document.createElement('button')

    button_name.setAttribute('id', 'but_name')
    button_email.setAttribute('id', 'but_email')
    button_age.setAttribute('id', 'but_age')

    button_name.innerHTML = 'Nome'
    button_age.innerHTML = 'Idade'
    button_email.innerHTML = 'E-mail'

    div.setAttribute('class', 'alter')

    div.appendChild(text)
    div.appendChild(button_name)
    div.appendChild(button_age)
    div.appendChild(button_email)

    document.body.insertBefore(div, resp)

    button_name.onclick = function () {
        let type = 0
        div.style.display = 'none'
        name_button = prompt('Digite o nome: ')
        limpa_tela()
        alter_person(type, name_button, index)
    }

    button_age.onclick = function () {
        let type = 1
        div.style.display = 'none'
        name_button = prompt('Digite a idade: ')
        alter_person(type, name_button, index)
    }

    button_email.onclick = function () {
        let type = 2
        div.style.display = 'none'
        name_button = prompt('Digite o email: ')
        alter_person(type, name_button, index)
    }
}

function tela_alter_person(){
    input_name = prompt('Digite o nome da pessoa a ser alterada: ')
    index = coração_busca(input_name)
    if(index != -1){
        alert('Pessoa encontrada com sucesso')
        option_alter(index)
    }

    let resp = document.querySelector('.resp')

    let div = document.createElement('div')

    document.body.insertBefore(div, resp)
}

function alter_person(type, input, index){

    if(type == 0){
        nomes[index][0] = input
    }else if(type == 1){
        nomes[index][1] = input
    }else{
        nomes[index][2] = input
    }

    alert('Alteração feita com sucesso')
    limpa_tela()
    mostrar_vetor()
}

function include(){
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let email = document.getElementById('email').value

    nomes.push([nome, idade, email]);
    alert('Pessoa cadastrada com sucesso!')
}

function remove(){
    let nome = prompt('Digite o nome da pessoa que queira remover: ')
    let cont = coração_busca(nome)
    let ver = nomes[cont]

    index = nomes.map(function (x){return x[0]})
    sla = index.indexOf(nome)
    

    if(cont != -1){
        ver.splice(0, 3)
        nomes.splice(sla, 1)
        alert('Pessoa removida com sucesso!')
        limpa_tela()
        mostrar_vetor()
    }else{
        alert('Pessoa não econtrada')
    }

}

function coração_busca(nome){
    let cont = 0
    let yes = false

    while(cont < nomes.length){
        index = nomes[cont][0]

        if(index == nome){
            let i = cont
            cont = nomes.length
            yes = true
            return i
        }

        cont ++;
    }

    if(yes == false){
        return -1
    }
}

function buscar(){
    let nome = prompt('Digite o nome da pessoa que queira buscar: ')
    let resp = document.querySelector('.resp') 
    let cont = coração_busca(nome)

    if(cont != -1){
        mostrar_vetor()
        resp.innerHTML = `<br>${nome} encontrado na ${cont+1}° posição`
    }else{
        resp.innerHTML = `<br>Nome: ${nome} não se encontra no vetor`
    }  
}