// console.log("login functionality comming!!!");
document.getElementById("login-btn").addEventListener("click", function () {
  const mobileNo = document.getElementById("moblie-input").value;
  const pin = document.getElementById("pin-input").value;
  if (mobileNo === "01712345678" && pin === "1234") {
    alert("login successfully!");
    window.location.assign("/home.html");
  } else {
    alert("login failed!");
    return;
  }
});
