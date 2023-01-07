function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "../../index.html";
  }).catch(() => {
    alert('Erro ao fazer logout!')
  })
}

// menu toggle
function closeMenu() {
  const toggle = document.querySelector('.hamburger');
  const sideMenu = document.querySelector('.side-menu');
  const main = document.querySelector('#home');

  toggle.onclick = () => {
    sideMenu.classList.toggle('active')
    main.classList.toggle('active')
  }
}