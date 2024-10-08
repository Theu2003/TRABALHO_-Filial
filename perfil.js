// Função para fazer login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('profileSection').style.display = 'block';
        document.getElementById('userNameDisplay').textContent = username;
        loadUserPosts(username);
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

// Função para carregar as postagens do usuário
function loadUserPosts(username) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const userPostsList = document.getElementById('userPostsList');
    userPostsList.innerHTML = '';

    posts.forEach(post => {
        if (post.username === username) {
            const listItem = document.createElement('li');
            listItem.textContent = post.content;
            userPostsList.appendChild(listItem);
        }
    });
}
