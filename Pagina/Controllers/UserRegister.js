import { UserRegister, everification, auth } from "./Global.js";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

// Evento para el registro con correo y contraseña
document.getElementById('registerbtn').addEventListener('click', async (event) => {
    event.preventDefault(); // Para prevenir el envío del formulario y recarga de la página

    const email = document.getElementById('newuser').value;
    const password = document.getElementById('newpassword').value;

    try {
        const userCredential = await UserRegister(email, password);
        if (userCredential) {
            await everification();
            alert('Registro Exitoso! ' + email);
            // Redirigir al usuario a la página que desees después del registro
            window.location.href = 'login.html'; // Asumiendo que quieras enviarlo a la página de inicio de sesión
        }
    } catch (error) {
        alert('Error, autenticación fallida: ' + error.message);
        console.log('sesión ' + email + ' no validada', error);
    }
});

// Función para el registro con Google
const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        // Puedes obtener el token de Google y usarlo para acceder a la API de Google.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // Usuario registrado con Google
        await everification();
        alert('Registro con Google exitoso');
        // Redirigir a donde necesites
        window.location.href = 'login.html';
    } catch (error) {
        alert('Error al registrar con Google: ' + error.message);
    }
};

// Evento para el botón de registro con Google
document.getElementById('googleSignUp').addEventListener('click', registerWithGoogle);

// Función para el registro con Facebook
const registerWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        // Puedes obtener el token de Facebook y usarlo para acceder a la API de Facebook.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // Usuario registrado con Facebook
        await everification();
        alert('Registro con Facebook exitoso');
        // Redirigir a donde necesites
        window.location.href = 'login.html';
    } catch (error) {
        alert('Error al registrar con Facebook: ' + error.message);
    }
};

// Evento para el botón de registro con Facebook
document.getElementById('facebookSignUp').addEventListener('click', registerWithFacebook);
