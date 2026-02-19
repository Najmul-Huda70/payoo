document.getElementById("cashout-btn").addEventListener("click", function () {
  const agentNumber = getValueFromInput("agent-number");
  if (agentNumber.length != 11) {
    alert("Invalid Agent Number.");
    return;
  }

  const balance = getBalance();

  const amount = getValueFromInput("amuont-input");

  const newBalance = balance - Number(amount);
  if (newBalance < 0 || Number(amount) < 0) {
    alert("Invalid Balance.");
    return;
  }

  const pin = getValueFromInput("pin-input");
  if (pin === "1234") {
    alert("Cashout Successful.");
    setBalance(newBalance);
  } else {
    alert("invalid pin.");
    return;
  }
});
