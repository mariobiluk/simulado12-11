const token = localStorage.getItem('token')
if(!token){
    location.href = '../index.html'
}

const resposta = document.getElementById('resposta')
const btn_cad = document.getElementById('btn_cad')

btn_cad.addEventListener('click', (e) => {
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const cpf = document.getElementById('cpf').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf
    }

    fetch('http://localhost:3000/cliente', {
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