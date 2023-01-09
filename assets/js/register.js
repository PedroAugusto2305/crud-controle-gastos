firebase.auth().onAuthStateChanged(user => { if (user) { window.location.href = "home.html" } })

function onChangeEmail() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function onChangePassword() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
  form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";
  validatePasswordsMatch()
}

function register() {
  const email = form.email().value;
  const password = form.password().value;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => window.location.href = "home.html").catch(error => alert(getErrorMessage(error)))
}

function getErrorMessage(error) {
  if (error.code == "auth/email-already-in-use") {
    return "Email já existente.";
  }
  return error.message;
}

function onChangeConfirmPassword() {
  validatePasswordsMatch()
}

function validatePasswordsMatch() {
  const password = form.password().value;
  const confirmPassword = form.confirmPassword().value;
  form.passwordDoesntMatchError().style.display = password === confirmPassword ? "none" : "block";
}

const form = {
  email: () => document.getElementById('email'),
  emailRequiredError: () => document.getElementById('emailRequiredError'),
  emailInvalidError: () => document.getElementById('emailInvalidError'),
  password: () => document.getElementById('password'),
  confirmPassword: () => document.getElementById('confirmPassword'),
  passwordMinLengthError: () => document.getElementById('passwordMinLengthError'),
  passwordRequiredError: () => document.getElementById('passwordRequiredError'),
  passwordDoesntMatchError: () => document.getElementById('passwordDoesntMatchError')
}