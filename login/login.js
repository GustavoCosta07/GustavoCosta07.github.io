const marretarUsuarios = () => {
    const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    if (listaUser.length === 0) {
        const usuarios = [
            {
                id: 1,
                nomeCad: 'Maria',
                emailCad: 'maria@maria.com',
                senhaCad: '123456',
                usuarioCad: '@maria',
                telefoneCad: '31967389293',
            },
            {
                id: 2,
                nomeCad: 'João',
                emailCad: 'joao@joao.com',
                senhaCad: '654321',
                usuarioCad: '@joao',
                telefoneCad: '3173520977',
            }
        ]

        const pets = [
            {
                id: 1,
                nomeAnimalCad: 'Bilu',
                especieCad: 'Cachorro',
                idadeCad: 8,
                descricaoCad: 'Bilú é muito dócil e amoroso, gosta de brincar e fazer estripulias... Yuuppiiii',
                idDono: 1
            },
            {
                id: 2,
                nomeAnimalCad: 'Alonzo',
                especieCad: 'Gato',
                idadeCad: 2,
                descricaoCad: 'Alonzo gosta de ser tratado com respeito, prefere não dar muita bola para estranhos e dorme muito.',
                idDono: 1
            },
            {
                id: 3,
                nomeAnimalCad: 'Toby (O Maguire)',
                especieCad: 'Cachorro',
                idadeCad: 1,
                descricaoCad: 'Toby é fanático pelo universo Marvel, está precisando de um Sr. Tony Stark em sua vida!',
                idDono: 2
            }
        ]

        localStorage.setItem('listaUser', JSON.stringify(usuarios));
        localStorage.setItem('listaAnimal', JSON.stringify(pets));
        console.log('usuários marretados com sucesso!')
    }
}

function entrar() {

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    const usuarioLogado = listaUser.filter((user) => email == user.emailCad && password == user.senhaCad)

    if (usuarioLogado.length === 0) {
        alert("Insira os dados nos campos corretamente!")
        return;
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado[0]));

    window.location.assign('/home/home.html')

    return false
}

marretarUsuarios()