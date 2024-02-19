btnVoltarLogin.addEventListener('click', (e) => {
    window.location.href = '../../../index.html';
})

function toogleButtoDisable() {
    const disa = !isformValid()
    form.registerButton().disable = disa;
    console.log(disa);
}

function onchangeMail() {
    const email = form.email().value;
    form.emailRequerid().style.display = email ? "none" : "block";
    form.emailInvalid().style.display = validateEmail(email) ? "none" : "block";
    toogleButtoDisable();
}

function onChangePassword() {
    const password = form.password().value;
    const vLenght = password.length;
    form.passwordRequerid().style.display = password ? "none" : "block";
    form.passwordMinWidht().style.display = vLenght >= 6 ? "none" : "block";
    validatePasswordMatch();
    toogleButtoDisable();
}

function onRepeatPassWord() {
    validatePasswordMatch();
    // const disa = !isformValid()
    //  document.getElementById("registerButton").disabled = disa;
}

function isformValid() {

    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }
    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
    }
    const passwordRepeate = form.recorevypassword().value;
    if (password != passwordRepeate) {
        return false;
    }

    return true;
}

function validatePasswordMatch() {
    const password = form.password().value;
    const passwordRepeate = form.recorevypassword().value;

    form.passwordEquals().style.display = password == passwordRepeate ? "none" : "block";
    const disa = password == passwordRepeate;
    document.getElementById("registerButton").disabled = !disa;
}

const form = {
    confirPassorwd: () => document.getElementById("ConfirmPass"),
    email: () => document.getElementById("emailCad"),
    emailInvalid: () => document.getElementById("emailinvalid"),
    emailRequerid: () => document.getElementById("emailrequired"),
    password: () => document.getElementById("senhaCad"),
    passwordRequerid: () => document.getElementById("password-required"),
    passwordMinWidht: () => document.getElementById("passwordMinWidt"),
    recorevypassword: () => document.getElementById("recorevypassword"),
    registerButton: () => document.getElementById("registerButton"),
    passwordEquals: () => document.getElementById("passwordEquals")


}