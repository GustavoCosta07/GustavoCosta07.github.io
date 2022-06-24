const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if (!usuarioLogado) {
    window.location.assign('../index.html')
}

window.onload = () => {
    gerarHtml()
}

const gerarHtml = () => {
    const animais = JSON.parse(localStorage.getItem('listaAnimal') || '[]')
    const listaPets = document.getElementById('listaPets')

    for (const animal of animais.reverse()) {
        const template = `<div class="container" style="margin-bottom: 10px;">
            <div class="row">
                <img height="100%" width="100%" src="../imagens/pets/${animal.id}.jpg" class="imagem1">
                <div class="col-xs-12 col-12 col-md-6">
                    <h5> ${animal.nomeAnimalCad}</h5>
                    <p></p>
                    <p align="justify"> ${animal.descricaoCad}</p><a href="/visibilidade/index.html?id=${animal.id}"><button type="button"
                            class="btn btn-success">Saiba Mais</button>
                    </a>
                </div>
            </div>
        </div>`
        listaPets.innerHTML += template
    }
}


function sair() {
    localStorage.removeItem('usuarioLogado');
    window.location.assign('/login/index.html')
}
