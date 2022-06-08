const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if (!usuarioLogado) {
    window.location.assign('../index.html')
}

window.onload = () => {
    document.getElementById("usuarioNome").innerHTML = usuarioLogado.usuarioCad
}

function sair () {
    localStorage.removeItem('usuarioLogado');
    window.location.assign('/login/index.html')
}
