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
    sideMenu.classList.toggle('active');
    main.classList.toggle('active');
  }
}

// transactions functions

findTransactions();
function findTransactions() {
  setTimeout(() => {
    addTransactionsToScreen(fakeTransactions)
  }, 1000)
}

function addTransactionsToScreen(transactions) {
  const transactionsList = document.getElementById('transactionsList');

  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.classList.add(transaction.type);

    const name = document.createElement('p');
    name.classList.add('transactions-item');
    name.innerHTML = transaction.transactionType;
    li.appendChild(name);

    const price = document.createElement('p');
    price.classList.add('transactions-item');
    price.innerHTML = formatMoney(transaction.money);
    li.appendChild(price);

    const date = document.createElement('p');
    date.classList.add('transactions-item');
    date.innerHTML = transaction.date;
    li.appendChild(date);

    const type = document.createElement('p');
    type.classList.add('transactions-item');
    type.innerHTML = transaction.type;
    li.appendChild(type)

    if (transaction.description) {
      const description = document.createElement('p');
      description.classList.add('transactions-item');
      description.innerHTML = transaction.description;
      li.appendChild(description);
    }

    transactionsList.appendChild(li)
  });
}

function formatMoney(money) {
  return `${money.currency} ${money.value.toFixed(2)}`
}

const fakeTransactions = [{
  type: 'expense',
  date: '08/01/2023',
  money: {
    currency: 'R$',
    value: 10
  },
  transactionType: 'Alimentação',
  description: 'Supermercado'
}, {
  type: 'income',
  date: '05/01/2023',
  money: {
    currency: 'R$',
    value: 5000
  },
  transactionType: 'Salário',
  description: 'Empresa A'
}, {
  type: 'expense',
  date: '06/01/2023',
  money: {
    currency: 'R$',
    value: 10
  },
  transactionType: 'Transporte',
  description: 'Metrô ida e volta'
}]