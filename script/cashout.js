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
    alert(`${amount} TK Cashout Successful.`);
    setBalance(newBalance);
    // take history container
    const history = document.getElementById("history-container");
    console.log(history);
    const newCard = document.createElement("div");
    const date = new Date();
    const dateTime = date.toLocaleString();
    newCard.innerHTML = `<div
          class="Transaction-card flex justify-between items-center space-y-2 p-2 bg-base-100 rounded-lg"
        >
          <div
            class="bg-gray-200 w-15 h-15 flex justify-center items-center rounded-full"
          >
            <img class="w-10 h-10" src="./assets/opt-2.png" alt="" />
          </div>
          <div>
            <h2 class="text-xl font-bold">Cashout <span class="text-[16px] font-normal"> - ${amount} TK</span></h2>
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
