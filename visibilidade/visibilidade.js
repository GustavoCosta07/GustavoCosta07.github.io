const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
if (!usuarioLogado) {
    window.location.assign('../index.html')
}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { id } = params

if (!id) {
    window.location.assign('../home/home.html')
}

const animais = JSON.parse(localStorage.getItem('listaAnimal'))

let pet = animais.filter(function (animal) {
    return animal.id == id
})

if (pet.length === 0) {
    window.location.assign('../home/home.html')
}

pet = pet[0]
const donos = JSON.parse(localStorage.getItem('listaUser'))
let idDono = pet.idDono

let dono = donos.filter(function (dono) {
    return dono.id == idDono
})
dono = dono[0]


window.onload = function () {
    document.getElementById('nomePet').innerHTML = pet.nomeAnimalCad
    document.getElementById('imagemPet').src = pet.fotoPet || '../imagens/pets/' + pet.id + '.jpg'
    document.getElementById('idadePet').innerHTML = pet.idadeCad + ' ano(s)'
    document.getElementById('nomeDono').innerHTML = dono.nomeCad
    document.getElementById('descricao').innerHTML = pet.descricaoCad //Este vai sair para chamar descrição completa
    document.getElementById('email').innerHTML = dono.emailCad
    document.getElementById('telefone').innerHTML = dono.telefoneCad
    // document.getElementById('descricaoCompleta').innerHTML = pet.descricaoCompletaAnimalCad
    // document.getElementById('localizacao').innerHTML = pet.localizacaoAnimalCad

}



// function excluirAnimal() {
//     const idDonoAnimal = JSON.parse(localStorage.getItem('listaAnimal') || '[]');

//     for (const id of idDonoAnimal) {
//         if (id.idDono === usuarioLogado.id) {
           

//             if ( idDonoAnimal.length === 0) {
//                 localStorage.removeItem('listaAnimal')
//             } else {
//                 localStorage.setItem('listaAnimal', JSON.stringify(idDonoAnimal));
//             }
        
//             localStorage.removeItem('listaAnimal');
//             window.location.assign('../home/home.html')
//         }
//     }
// }