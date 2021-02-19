let bankOpen = true;
let balance = 1000;

while (bankOpen) {
  const userInput = prompt(
    "What do you want to do? Q: Quit, B: Balance, D: Deposit, W: Withdrawl"
  );

  if (userInput.toUpperCase() === "Q") {
    bankOpen = false;
  } else if (userInput.toUpperCase() === "B") {
    alert(balance);
  } else if (userInput.toUpperCase() === "D") {
    deposit();
  } else if (userInput.toUpperCase() === "W") {
    takeout();
  }

  console.log("bank still open");
}

function takeout() {
  const valueToWithdrawl = prompt("How much to Withdrawl?");

  // if withdralw causes overdraft don't allow
  if (balance - Number(valueToWithdrawl) > 0) {
    balance = balance - Number(valueToWithdrawl);
  } else {
    alert("You would overdraft!!!");
  }
}

function deposit() {
  const valueToDeposit = prompt("How much to Deposit?");
  balance = balance + Number(valueToDeposit);
}

console.log("DONE");
