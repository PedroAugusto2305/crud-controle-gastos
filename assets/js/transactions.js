function onChangeDate() {
  const date = form.date().value;
  form.dateRequiredError().style.display = !date ? "block" : "none";
}

function onChangeValue() {
  const money = form.money().value;
  form.moneyRequiredError().style.display = !money ? "block" : "none";
}

function onChangeTransactionType() {
  const transactionType = form.transactionType().value;
  form.transactionTypeRequiredError().style.display = !transactionType ? "block" : "none";
}

function saveTransaction() {
  const transaction = createTransaction()
  firebase.firestore()
    .collection('transactions')
    .add(transaction)
    .then(() => window.location.href = "./home.html").catch(() => { alert('Erro ao salvar transação') })
}

// Create
function createTransaction() {
  return {
    type: form.typeExpense().checked ? "expense" : "income",
    date: form.date().value,
    money: parseFloat(form.money().value),
    transactionType: form.transactionType().value,
    description: form.description().value,
    user: {
      uid: firebase.auth().currentUser.uid
    }
  }
}

const form = {
  date: () => document.getElementById('date'),
  dateRequiredError: () => document.getElementById('date-required-error'),
  money: () => document.getElementById('money'),
  moneyRequiredError: () => document.getElementById('money-required-error'),
  transactionType: () => document.getElementById('transaction-type'),
  transactionTypeRequiredError: () => document.getElementById('transaction-type-required-error'),
  typeExpense: () => document.getElementById('expense'),
  typeIncome: () => document.getElementById('income'),
  description: () => document.getElementById('transaction-name')
}

// Update
function getTransactionUid() {
  const userId = createTransaction().user.uid;
  return console.log(userId);
}

getTransactionUid()