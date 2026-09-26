document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');

    erroEmail.style.display = 'none';
    erroSenha.style.display = 'none';

    let formValido = true;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        erroEmail.textContent = 'O campo de e-mail é obrigatório.';
        erroEmail.style.display = 'block';
        formValido = false;
    } else if (!regexEmail.test(email)) {
        erroEmail.textContent = 'Por favor, insira um e-mail válido (ex: nome@email.com).';
        erroEmail.style.display = 'block';
        formValido = false;
    }

    if (senha === '') {
        erroSenha.textContent = 'O campo de senha é obrigatório.';
        erroSenha.style.display = 'block';
        formValido = false;
    }

    if (formValido) {
        window.location.href = 'painelADM.html';
    }
});