document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores dos campos de login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificação simples para demonstrar (substitua com a lógica de verificação real)
    if (username === 'adm' && password === '123') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('error').style.display = 'block';
    }
});
