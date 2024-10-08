// Função para registrar um novo usuário
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.username === username)) {
        alert('Usuário já existe.');
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuário registrado com sucesso!');
    }
});
