#! /usr/bin/env node
import inquirer from "inquirer";

let pinCode: number = 9876;
let balance: number = 250000;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "PLEASE ENTER YOUR P.I.N",
  type: "number",
});

if (pinAnswer.pin === pinCode) {
  console.log("You have successfully logged in.");
  let operationAns = await inquirer.prompt({
    name: "operation",
    message: "Please select an option",
    type: "list",
    choices: ["Cash Withdrawal", "Fast Cash", "Balance Inquiry"],
  });

  switch (operationAns.operation) {
    case "Cash Withdrawal":
      let amountAns = await inquirer.prompt({
        name: "amount",
        message: "PLEASE ENTER AMOUNT",
        type: "number",
      });

      if (amountAns.amount <= balance) {
        balance -= amountAns.amount;
        console.log("Your remaining balance is $", balance);
      } else {
        console.log("You have insufficient balance");
      }
      break;

    case "Fast Cash":
      let FastCashAns = await inquirer.prompt({
        name: "amount",
        type: "list",
        choices: ["1000", "2000", "3000", "5000", "10000"],
      });

      if (Number(FastCashAns.amount) <= balance) {
        let balance2 = balance - Number(FastCashAns.amount);
        console.log('Your remaining balance is $', balance2);
      } else {
        console.log('You have insufficient balance');
      }
      break;

    case "Balance Inquiry":
      console.log(balance);
      break;

    default:
      console.log("PLEASE ENTER A VALID OPTION");
  }
} else {
  console.log("PLEASE ENTER A VALID P.I.N");
}