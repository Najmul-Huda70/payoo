// get id -> value from input
function getValueFromInput(id) {
  const value = document.getElementById(id).value;
  return value;
}
// get balance
function getBalance() {
  const balance = document.getElementById("balance").innerText;
  return Number(balance);
}
// set value -> balance
function setBalance(balance) {
  document.getElementById("balance").innerText = balance;
}

// show only addlistener id
function showOnly(id) {
  const addMoney = document.getElementById("Add-money");
  const cashOut = document.getElementById("cashout");
  //all id hidden
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  //show id
  const showID = document.getElementById(id);
  showID.classList.remove("hidden");
}
