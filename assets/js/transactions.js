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

const form = {
  date: () => document.getElementById('date'),
  dateRequiredError: () => document.getElementById('date-required-error'),
  money: () => document.getElementById('money'),
  moneyRequiredError: () => document.getElementById('money-required-error'),
  transactionType: () => document.getElementById('transaction-type'),
  transactionTypeRequiredError: () => document.getElementById('transaction-type-required-error')
}


