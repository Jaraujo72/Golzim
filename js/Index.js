function onChangeEmail() {
    toggleEmailErros();
    toggleButtonsDisable();
}

function onChangePassword() {
    toggleIspassWordErros();
    toggleButtonsDisable();
}

function isEmailValid() {
    const email = forms.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErros() {
    const email = forms.email().value;
    forms.emailrequired().style.display = email ? "none" : "block";
    forms.emailinvalid().style.display = isEmailValid(email) ? "none" : "block";
}

function toggleButtonsDisable() {

    const emailValid = isEmailValid();
    forms.recorevypassword().disabled = !emailValid;
    const passwordValid = isPassWordValid();
    forms.loginbutton().disabled = !emailValid || !passwordValid;
}

function toggleIspassWordErros() {

    const password = forms.password().value;
    forms.passwordrequired().style.display = (!isPassWordValid()) ? "block" : "none";
}

function isPassWordValid() {
    const password = forms.password().value;
    if (!password) {
        return false;
    }
    return true;
}


function registrar() {
    window.location.href = '/pages/register/registro.html'
}

function voltarInicio() {
    window.location.href = '/pages/home/home.html'
}

const forms = {
    email: () => document.getElementById("email"),
    passwordrequired: () => document.getElementById("password-required"),
    password: () => document.getElementById("password"),
    loginbutton: () => document.getElementById("loginbutton"),
    recorevypassword: () => document.getElementById("recorevypassword"),
    emailinvalid: () => document.getElementById("email-invalid"),
    emailrequired: () => document.getElementById("email-required")
}

