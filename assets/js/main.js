function onChangeEmail() {
  toggleButtonDisable()
  toggleEmailErrors()
}
function onChangePassword() {
  toggleButtonDisable()
  togglePasswordErrors()
}
function isEmailValid() {
  const email = document.getElementById('email').value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErrors() {
  const email = document.getElementById('email').value;
  if (!email) {
    document.getElementById('emailRequiredError').style.display = 'block';
  } else {
    document.getElementById('emailRequiredError').style.display = 'none';
  }

  if (validateEmail(email)) {
    document.getElementById('emailInvalidError').style.display = 'none';
  } else {
    document.getElementById('emailInvalidError').style.display = 'block';
  }
}

function togglePasswordErrors() {
  const password = document.getElementById('password').value;
  if (!password) {
    document.getElementById('passwordRequiredError').style.display = 'block';
  } else {
    document.getElementById('passwordRequiredError').style.display = 'none';
  }
}

function toggleButtonDisable() {
  const emailValid = isEmailValid();
  document.getElementById('recoverPassword').disabled = !emailValid;

  const passwordValid = isPasswordValid();
  document.getElementById('loginBtn').disabled = !emailValid || !passwordValid;
}


function isPasswordValid() {
  const password = document.getElementById('password').value;
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}