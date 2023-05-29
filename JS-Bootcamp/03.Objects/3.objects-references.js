let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses += amount
}

let addIncome = function(account, amount){
    account.income += amount
}

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    let summary = `Account for ${account.name} has $${balance}, $${account.income} in income. $${account.expenses} in expenses.`
    return summary
}

addExpense(myAccount, 300)
addIncome(myAccount, 1000)
let summary = getAccountSummary(myAccount)
console.log(summary)