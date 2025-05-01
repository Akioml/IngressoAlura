function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value; // ex: "pista"
    let quantidade = parseInt(document.getElementById('qtd').value, 10);
    let id = `qtd-${tipo}`; // ex: "qtd-pista"

    const dados = {};
    document.querySelectorAll('.lista span').forEach(span => {
        dados[span.id] = parseInt(span.textContent, 10);
    });

    if(isNaN(quantidade) || quantidade <= 0){
        alert('Por favor, insira uma quantidade válida.')
        return
    }

    let disponivel = dados[id]
    let novoValor = disponivel - quantidade

    if(quantidade > disponivel){
        alert(`Quantidade indisponivel. Esta disponivel apenas ${disponivel} de ${tipo}`)
        return
    }

    let atualizar = document.getElementById(id)
    atualizar.textContent = novoValor

}