function validateEmail(email) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
}

function logar() {
    window.location.href = '/pages/home/home.html';
}

const firebaseConfig = {
    apiKey: "AIzaSyA7yhvXrf-UWIZPnsCshJB-y4ynpCt5hpc",
    authDomain: "login-golzim.firebaseapp.com",
    projectId: "login-golzim",
    storageBucket: "login-golzim.appspot.com",
    messagingSenderId: "708545937045",
    appId: "1:708545937045:web:721e937c92fc2182bd659c"
};
