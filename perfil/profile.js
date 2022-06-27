const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
if (!usuarioLogado) {
    window.location.assign('../index.html')
}

window.onload = function () {
    fillFields()
}

function fillFields() {
    document.getElementById('usuario').value = usuarioLogado.usuarioCad
    document.getElementById('nome').value = usuarioLogado.nomeCad
    document.getElementById('email').value = usuarioLogado.emailCad
}

function editar() {
    const usuario = document.getElementById('usuario').value
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const confirmacao = document.getElementById('confirmacao').value
    const senhaAtual = document.getElementById('senha_atual').value


    if (!usuario || !nome || !email || !senha || !confirmacao || !senhaAtual) {
        alert("Insira os valores nos campos corretamente!")
        return false;
    }

    if (senhaAtual != usuarioLogado.senhaCad) {
        alert("Senha atual é diferente da senha cadastrada!")
        return false;
    }

    if (senha != confirmacao) {
        alert("As senhas não conferem!")
        return false;
    }


    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    const tamanhoLista = listaUser.length

    for (let contador = 0; contador < tamanhoLista; contador++) {
        if (listaUser[contador].id === usuarioLogado.id) {
            listaUser[contador] = {
                id: usuarioLogado.id,
                nomeCad: nome,
                emailCad: email,
                senhaCad: senha,
                usuarioCad: usuario
            }
            localStorage.setItem('usuarioLogado', JSON.stringify(listaUser[contador]));
            break;
        }
    }

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    alert("Usuário alterado com sucesso!")
    return false
    
    

}

function excluir() {

    
    const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    const tamanhoLista = listaUser.length

    for (let contador = 0; contador < tamanhoLista; contador++) {
        if (listaUser[contador].id === usuarioLogado.id) {
            listaUser.splice(contador, 1)
            break;
        }
    }

    if ( listaUser.length === 0) {
        localStorage.removeItem('listaUser')
    } else {
        localStorage.setItem('listaUser', JSON.stringify(listaUser));
    }

    localStorage.removeItem('usuarioLogado');
    window.location.assign('../index.html')
}

function sair() {
    localStorage.removeItem('usuarioLogado');
    window.location.assign('../index.html')
}