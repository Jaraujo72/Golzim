function onchangeMail() {
    const email = form.email().value;
    console.log(email);
    form.emailRequerid().style.display = email ? "none" : "block";
    form.emailInvalid().style.display = validateEmail(email) ? "none" : "block";

}

const form = {
    confirPassorwd: () => document.getElementById("ConfirmPass"),
    email: () => document.getElementById("emailCad"),
    emailInvalid: () => document.getElementById("emailinvalid"),
    emailRequerid: () => document.getElementById("emailrequired"),
    password: () => document.getElementById("password")

}