document.getElementById("add-money-btn").addEventListener("click", function () {
  const bank = getValueFromInput("select-bank");
  if (bank === "Select a back") {
    alert("Please select a bank.");
    return;
  }

  const accNo = getValueFromInput("bank-account-number");
  if (accNo.length != 11) {
    alert("Invalid bank account number.");
    return;
  }

  const balance = getBalance();

  const amount = getValueFromInput("add-amuont-input");

  const newBalance = balance + Number(amount);
  if (newBalance < 0 || Number(amount) < 0 || amount.length == 0) {
    alert("Invalid Balance.");
    return;
  }

  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert(`Add Money Successful from ${bank} at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("invalid pin.");
    return;
  }
});
