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


let requiredExp = prompt('Put required expenses this month?'),
    requiredExpBudget = prompt('How much are required costs?');


appData.expenses = {
    requiredExp: requiredExpBudget
};

alert('Your expenses for 1 day: ' + )








