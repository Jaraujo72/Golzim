
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA7yhvXrf-UWIZPnsCshJB-y4ynpCt5hpc",
    authDomain: "login-golzim.firebaseapp.com",
    projectId: "login-golzim",
    storageBucket: "login-golzim.appspot.com",
    messagingSenderId: "708545937045",
    appId: "1:708545937045:web:721e937c92fc2182bd659c"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


loginbutton.addEventListener('click', (e) => {
    showLoading();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            hideLoading();
            logar();
            // ...
        })
        .catch((err) => {
            hideLoading();
            alert(err.message);
        });

});
recorevypassword.addEventListener('click', (e) => {
    const email = document.getElementById("email").value;
    console.log(email);
    showLoading();
    sendPasswordResetEmail(auth, email).then(() => {
        // Password reset email sent!

        hideLoading();
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            hideLoading();
            // ..
        });
});