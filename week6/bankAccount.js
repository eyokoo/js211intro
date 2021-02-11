class BankAccount {
  accountNumber;
  owner;
  transactions;

  constructor(owner, accountNumber) {
    this.owner = owner
    this.accountNumber = accountNumber
    this.transactions = []
  }
  balance() {
    //This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array
    let sum = 0
    for (let i = 0; i < this.transactions.length; i++) {
      sum = sum + this.transactions[i].amount;
    }
    return sum;
  }

  deposit(amt) {
    //This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
    // NOTE: You should not be able to deposit a negative amount
    if (amt > 0) {
      let deposit = new Transaction(amt, "deposit")
      this.transactions.push(deposit)
    } else {
      console.log(`Deposit denied. Amount must be positive.`)
    }

  }
  charge(amt, payee) {
    // should not be able to charge if the balance is zero
    if (this.balance() >= amt) {
      let charge = new Transaction((amt * -1), payee)
      this.transactions.push(charge)
    } else {
      console.log(`Charge declined, insufficient funds.`)
    }
  }
}


class Transaction {
  date;
  amount;
  payee;

  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

//account has been declared below
let account1 = new BankAccount("John Doe", 90987654);

account1.deposit(45);
account1.deposit(100);
account1.charge(160, "Walmart")
console.log(account1);

console.log(account1.balance());

// //new account should have a zero balance
// console.log(account1.balance()) // 0

// //attempt to charge $10 at target
// account1.charge("Target", 10)

// //cannot charge to the account if the balance is zero
// console.log(account1.balance()) //0

// //the transaction should not have gone through
// console.log(account1.transactions.length) //0


// //deposit a $100
// account1.deposit(100);

// //charge $20
// account1.charge("Diamonds Direct", 1000);
// console.log(account1.balance()) //80

// //can issue refunds
// account1.charge("Target", -15);
// console.log(account1.balance()) //95

// //should not be able to deposit negative money
// account.deposit(-10);
// console.log(account1.balance)//95

