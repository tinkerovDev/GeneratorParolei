console.log('by TinkerASD');
document.getElementById('generate').addEventListener('click', function() {
    const length = 12; // Длина пароля
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password; // Выводим сгенерированный пароль
    console.log(password)
});
