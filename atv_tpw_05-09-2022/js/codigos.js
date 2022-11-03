function calcular(){
    let nome = document.getElementById("produto").value
    let dias = document.getElementById("dias").value
    let familia = document.getElementById("familia").value
    let quantidade = document.getElementById("quantidade").value

    if(nome == false || dias >= 8 || familia <= 1 || quantidade == false){
        alert("Insira os dados corretamente e tente novamente!")
    }else{
        let semana = (quantidade * familia * dias) / 1000
        let mes = semana * 4

        
        let resp = document.getElementById("resp")
        resp.innerHTML = `<p>Sua familia consome ${semana}kg de ${nome} por semana</p> <p> Que da um total de ${mes}kg por mês</p>`
        resp.classList.add("borda")
    }
}