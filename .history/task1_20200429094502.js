'use strict';

let money = prompt('Your budget for month?');


let appData = {
    "budget": money,
    "data": time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let requiredExp = prompt('Put your required expense this month?', ''),
        requiredExpBudget = prompt('How much are required costs?', '');
    appData.expenses[requiredExp] = requiredExpBudget;
}

alert('Your expenses for 1 day: ' + appData.budget/30 + '$');
