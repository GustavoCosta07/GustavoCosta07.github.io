


function cadastrar() {
    const usuario = document.getElementById('usuario').value
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const confirmacao = document.getElementById('confirmacao').value
    const telefone = document.getElementById('telefone').value



    if (!usuario || !nome || !email || !senha || !confirmacao || !telefone) {
        alert("Insira os valores nos campos corretamente!")
        return false;
    }

    if (nome.length < 6) {
        alert("Insira seu nome completo!")
        return false;
    }

    if (usuario.length < 3) {
        alert("Seu usuário deve ter no mínimo 3 caracteres!")
        return false;
    }

    if (telefone.length < 9) {
        alert("Insira um número de telefone válido!")
        return false;
    }

    if (senha.length < 6) {
        alert("Insira uma senha com no mínimo 6 caracteres!")
        return false;
    }
    const usuarios = JSON.parse(localStorage.getItem('listaUser') || '[]');

    for (const usuario of usuarios) {
        if (usuario.emailCad === email) {
            alert("Este email já está cadastrado na plataforma, insira um email diferente!")
            return false;
        }
    }

    if (senha != confirmacao) {
        alert("As senhas não conferem!")
        return false;
    }

    if (senha === confirmacao) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        const id = listaUser.length + 1

        listaUser.push(
            {
                id: id,
                nomeCad: nome,
                emailCad: email,
                senhaCad: senha,
                usuarioCad: usuario,
                telefoneCad: telefone,
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        window.location.assign('../index.html')
        return false

    }





}

