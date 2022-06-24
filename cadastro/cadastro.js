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

