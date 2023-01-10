// função que realiza logout
function logout() {
  firebase.auth().signOut().then(() => window.location.href = "../../index.html").catch(() => alert('Erro ao fazer logout!'))
}

// Recolher/Abrir menu lateral
function closeMenu() {
  const toggle = document.querySelector('.hamburger');
  const sideMenu = document.querySelector('.side-menu');
  const main = document.querySelector('#home');

  toggle.onClick = () => sideMenu.classList.toggle('active');
  main.classList.toggle('active');
}

firebase.auth().onAuthStateChanged(user => { if (user) { findTransactions(user) } })

function findTransactions(user) {
  firebase.firestore()
    .collection('transactions')
    .where('user.uid', '==', user.uid)
    .orderBy('date', 'desc')
    .get()
    .then(snapshot => {
      const transactions = snapshot.docs.map(doc => doc.data());
      addTransactionsToScreen(transactions);
    })
    .catch(error => {
      console.log(error);
      alert('Erro ao recuperar transacoes');
    })
}

function addTransactionsToScreen(transactions) {

  transactions.forEach(transactions => {
    const newRow = document.createElement('tr')
    newRow.classList.add('transactions-list')
    newRow.insertAdjacentHTML('beforeend', `
    <td class="transactions-item">${transactions.description}</td>
    <td class="transactions-item">R$${transactions.money.toFixed(2)}</td>
    <td class="transactions-item">${transactions.date}</td>
    <td class="transactions-item">${transactions.type}</td>
    <td class="transactions-item">${transactions.transactionType}</td>
    ` )
    document.querySelector('#tableClient>tbody').appendChild(newRow)
  })
}

function formatMoney(money) {
  return ` ${money.value.toFixed(2)}`
}

function newTransaction() { }

const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const toggleModal = () => { [modal, fade].forEach((el) => el.classList.toggle('hide')) }

[openModalBtn, closeModalBtn, fade].forEach((el) => { el.addEventListener('click', () => toggleModal()) })