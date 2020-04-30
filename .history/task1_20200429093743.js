'use strict';

let money = prompt('Your budget for month?'),
    time = prompt('Put date');

let appData = {
    "budget": money,
    "data": time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


let requiredExp = prompt('Put your required expense this month?'),
    requiredExpBudget = prompt('How much are required costs?');


appData.expenses = {
    requiredExp: requiredExpBudget
};

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
alert('Your expenses for 1 day: ' + requiredExpBudget/30 + '$');
