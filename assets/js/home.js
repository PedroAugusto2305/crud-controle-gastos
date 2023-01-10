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

// transactions functions

function findTransactions() {
  firebase.firestore()
    .collection('transactions')
    .get()
    .then(snapshop => {
      const transactions = snapshop.docs.map(doc => doc.data())
      addTransactionsToScreen(transactions)
    })
}


findTransactions();
// function findTransactions() { setTimeout(() => addTransactionsToScreen(fakeTransactions), 1000) }

function addTransactionsToScreen(transactions) {

  transactions.forEach(transactions => {
    const newRow = document.createElement('tr')
    newRow.classList.add('transactions-list')
    newRow.insertAdjacentHTML('beforeend', `
    <td class="transactions-item">${transactions.description}</td>
    <td class="transactions-item">R$${transactions.money}</td>
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