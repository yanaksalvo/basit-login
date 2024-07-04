
const users = [];

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        const user = { username, password };
        users.push(user);
        alert('Kayıt başarılı!');
        document.getElementById('register-username').value = '';
        document.getElementById('register-password').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
}


function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;


    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Giriş başarılı!');
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    } else {
        alert('Kullanıcı adı veya şifre hatalı.');
    }
}
