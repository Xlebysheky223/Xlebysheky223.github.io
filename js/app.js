const loginModal = document.getElementById('login_modal');
const registerModal = document.getElementById('register__container');
const register__link = document.getElementById('register_link');
const login__link = document.getElementById('login__link');

document.getElementById('openloginButton').addEventListener('click', openModal);
document.getElementById('closeloginButton').addEventListener('click', closeModal);
document.getElementById('closeregisterButton').addEventListener('click', closeModal);
document.getElementById('login__link').addEventListener('click', function() {
    closeRegisterModal();
});
document.getElementById('register_link').addEventListener('click', openRegisterModal);

loginModal.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        closeModal();
    }   
});
registerModal.addEventListener('click', function(event) {
    if (event.target === registerModal) {
        closeModal();
    }
});

function openModal() {
    document.getElementById('login_modal').style.display = 'block';
    document.getElementById('login__container').style.display = 'block';
    document.getElementById('register__container').style.display = 'none';
}

function closeModal() {
    document.getElementById('login_modal').style.display = 'none';
    document.getElementById('login__container').style.display = 'none';
    document.getElementById('register__container').style.display = 'none';
}

function openRegisterModal() {
    document.getElementById('login__container').style.display = 'none';
    document.getElementById('register__container').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('login__container').style.display = 'block';
    document.getElementById('register__container').style.display = 'none';
}