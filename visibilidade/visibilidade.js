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
    document.getElementById('imagemPet').src = '../imagens/pets/' + pet.id + '.jpg'
    document.getElementById('idadePet').innerHTML = pet.idadeCad + ' ano(s)'
    document.getElementById('nomeDono').innerHTML = dono.nomeCad
    document.getElementById('descricao').innerHTML = pet.descricaoCad
    document.getElementById('email').innerHTML = dono.emailCad
    document.getElementById('telefone').innerHTML = dono.telefoneCad
}