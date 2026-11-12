const token = localStorage.getItem('token')
if(!token){
    location.href = '../index.html'
}

const resposta = document.getElementById('resposta')
const btn_cad = document.getElementById('btn_cad')

btn_cad.addEventListener('click', (e) => {
    e.preventDefault()

    const modelo = document.getElementById('modelo').value
    const fabricante = document.getElementById('fabricante').value
    const numSerie = document.getElementById('numSerie').value
    const idCliente = document.getElementById('idCliente').value

    const valores = {
        modelo: modelo,
        fabricante: fabricante,
        numSerie: numSerie,
        idCliente: idCliente
    }

    fetch('http://localhost:3000/equipamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization':token
        },
        body: JSON.stringify(valores)
    })
        .then(res => res.json())
        .then(dados => {
            resposta.innerHTML = ''
            resposta.innerHTML += `<p>${dados.message}</p>`
            document.querySelector('form').reset()
        })
        .catch((err) => {
            resposta.innerHTML = ''
            resposta.innerHTML += `<p>Erro no servidor</p>`
            console.log('Erro no cadastro', err)
        })
})