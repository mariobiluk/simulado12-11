const token = localStorage.getItem('token')
const nome = localStorage.getItem('nomeFuncionario')
const verificarLog = document.getElementById('verificar_log')

if (token) {
    verificarLog.innerHTML = ''
    verificarLog.innerHTML += `<a href="#" id="btn_logout">Logout</a>&emsp;`
    verificarLog.innerHTML += `<span class="titulo_menu">${nome}</span>&emsp;`

    const btn_logout = document.getElementById('btn_logout')

    btn_logout.addEventListener('click', () => {
        localStorage.clear()
        location.reload()
    })
} else {
    verificarLog.innerHTML = ''
    verificarLog.innerHTML += `<a href="./html/login.html">Login</a>`
}