const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if (!usuarioLogado) {
    window.location.assign('../login/index.html')
}

function cadastrarAnimal() {
    const especie = document.getElementById('animal').value
    const nomeAnimal = document.getElementById('NomeAnimal').value
    const idadeAnimal = document.getElementById('Idade').value
    const descricaoAnimal = document.getElementById('Resumo').value
    const descricaoCompletaAnimal = document.getElementById('descricaoCompleta').value


    if (!especie || !nomeAnimal || !idadeAnimal || !descricaoAnimal) {
        alert("Insira os valores nos campos corretamente!")
        return false;
    }

    let listaAnimal = JSON.parse(localStorage.getItem('listaAnimal') || '[]')

    const id = listaAnimal.length + 1

    listaAnimal.push(
        {
            id: id,
            nomeAnimalCad: nomeAnimal,
            especieCad: especie,
            idadeCad: idadeAnimal,
            descricaoCad: descricaoAnimal,
            idDono: usuarioLogado.id
        }
    )

    localStorage.setItem('listaAnimal', JSON.stringify(listaAnimal))
    window.location.assign('/home/home.html')
    return false
}

// const upload = () => {
//     var imgFile = document.getElementById('file');
//     if (imgFile.files && imgFile.files[0]) {
//         var width;
//         var height;
//         var fileSize;
//         var reader = new FileReader();
//         reader.onload = function (event) {
//             var dataUri = event.target.result,
//                 // img = document.createElement("img");
//                 // img.src = dataUri;
//                 // width = img.width;
//                 // height = img.height;
//                 fileSize = imgFile.files[0].size;
//             alert(width);
//             alert(height);
//             alert(fileSize);
//         };
//         reader.onerror = function (event) {
//             console.error("File could not be read! Code " + event.target.error.code);
//         };
//         reader.readAsDataURL(imgFile.files[0]);
//     }
// }
