const token = localStorage.getItem('token')
if(!token){
    location.href = '../index.html'
}

const resposta = document.getElementById('resposta')
const btn_cad = document.getElementById('btn_cad')

btn_cad.addEventListener('click', (e) => {
    e.preventDefault()

    const status = document.getElementById('status').value
    const data = document.getElementById('data').value
    const idEquipamento = document.getElementById('idEquipamento').value

    const valores = {
        status: status,
        data: data,
        idEquipamento: idEquipamento,
    }

    fetch('http://localhost:3000/inspecao', {
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