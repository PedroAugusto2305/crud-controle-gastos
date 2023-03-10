firebase.auth().onAuthStateChanged(user => { if (user) window.location.href = "./assets/pages/home.html" })

function onChangeEmail() {
  toggleButtonDisable()
  toggleEmailErrors()
}
function onChangePassword() {
  toggleButtonDisable()
  togglePasswordErrors()
}

function login() {
  firebase.auth().signInWithEmailAndPassword(form.email().value,
    form.password().value).then(() => window.location.href = "./assets/pages/home.html")
    .catch(error => alert(getErrorMessage(error)))
}

function register() {
  window.location.href = "./assets/pages/register.html";
}

function RecoveryPassword() {
  firebase.auth().sendPasswordResetEmail(form.email().value).then(() => alert('Email enviado com sucesso!')).catch(error => alert(getErrorMessage(error)))
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário não encontrado";
  } else if (error.code == "auth/wrong-password") {
    return "Senha inválida";
  }
  return error.message;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? 'none' : 'block';
  form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';
}

function togglePasswordErrors() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? 'none' : 'block';
}

function toggleButtonDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

const form = {
  email: () => document.getElementById('email'),
  emailInvalidError: () => document.getElementById('emailInvalidError'),
  emailRequiredError: () => document.getElementById('emailRequiredError'),
  loginButton: () => document.getElementById('loginBtn'),
  password: () => document.getElementById('password'),
  passwordRequiredError: () => document.getElementById('passwordRequiredError'),
  recoverPassword: () => document.getElementById('recoverPassword')
}

// 97 linhas