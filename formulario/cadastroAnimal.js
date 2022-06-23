function cadastrarAnimal() {

    const nome = document.getElementById('Nome').value //pegar essa informação de um html de outra pasta ou pegar diretamente do local storage
    const telefone = document.getElementById('telefone').value
    const especie = document.getElementById('animal').value
    const nomeAnimal = document.getElementById('NomeAnimal').value
    const idadeAnimal = document.getElementById('Idade').value
    const descricaoAnimal = document.getElementById('Resumo').value


    if (!telefone || !nome || !especie || !nomeAnimal || !idadeAnimal || !descricaoAnimal) {
        alert("Insira os valores nos campos corretamente!")
        return false;
    }

    let listaAnimal = JSON.parse(localStorage.getItem('listaAnimal') || '[]')

    const id = listaAnimal.length + 1

    listaAnimal.push(
        {
            id: id,
            nomeCad: nome,
            nomeAnimalCad: nomeAnimal,
            especieCad: especie,
            telefoneCad: telefone,
            idadeCad: idadeAnimal,
            descricaoCad: descricaoAnimal,
        }
    )

    localStorage.setItem('listaAnimal', JSON.stringify(listaAnimal))
    window.location.assign('/home/home.html')
    return false







}