function entrar() {


    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    const usuarioLogado = listaUser.filter((user) => email == user.emailCad && password == user.senhaCad)

    if (usuarioLogado.length === 0) {
        alert("Insira os dados nos campos corretamente!")
        return;
    } 
   
    window.location.assign('https://youtube.com')

    return false
}