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
    // take history container
    const history = document.getElementById("history-container");
    const newCard = document.createElement("div");
    const date = new Date();
    const dateTime = date.toLocaleString();
    newCard.innerHTML = `<div
          class="Transaction-card flex justify-between items-center space-y-2 p-2 bg-base-100 rounded-lg"
        >
          <div
            class="bg-gray-200 w-15 h-15 flex justify-center items-center rounded-full"
          >
            <img class="w-10 h-10" src="./assets/opt-1.png" alt="" />
          </div>
          <div>
            <h2 class="text-xl font-bold">Add Money <span class="text-[16px] font-normal"> - ${amount} TK</span></h2>
            <p> Date & Time: ${dateTime}</p>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>`;
    history.appendChild(newCard);
  } else {
    alert("invalid pin.");
    return;
  }
});
