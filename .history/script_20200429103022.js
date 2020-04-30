'use strict';

let money = +prompt('Your budget for month?'),
    time = prompt('Put date');

let appData = {
    "budget": money,
    "data": time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


/*for (let i = 0; i < 2; i++) {
    let requiredExp = prompt('Put your required expense this month?', ''),
        requiredExpBudget = prompt('How much are required costs?', '');

    if (typeof (requiredExp) === 'string' && typeof (a) != null && typeof (requiredExpBudget) != null && requiredExpBudget != '' && requiredExp != ''
        && requiredExp.length < 50) {
            console.log('done!');
        appData.expenses[requiredExp] = requiredExpBudget;
    }
}*/

/*while (i < 2) {
    let requiredExp = prompt('Put your required expense this month?', ''),
        requiredExpBudget = prompt('How much are required costs?', '');
    if (typeof (requiredExp) === 'string' && typeof (a) != null && typeof (requiredExpBudget) != null && requiredExpBudget != '' && requiredExp != ''
        && requiredExp.length < 50) {
            console.log('done!');
        appData.expenses[requiredExp] = requiredExpBudget;
    i++;
}*/
let i = 0;
do { let requiredExp = prompt('Put your required expense this month?', ''),
         requiredExpBudget = prompt('How much are required costs?', '');
     if (typeof (requiredExp) === 'string' && typeof (a) != null && typeof (requiredExpBudget) != null && requiredExpBudget != '' && requiredExp != ''
        && requiredExp.length < 50) {
            console.log('done!');
        appData.expenses[requiredExp] = requiredExpBudget;
    i++;
}
}

while (i < 2);

let moneyPerDay = appData.budget/30
alert('Your expenses for 1 day: ' + moneyPerDay + '$');

if(appData.moneyPerDay < 500) {
    console.log('Min level of wealth');
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 3000) {
    console.log('Middle level of wealth');
} else if (appData.moneyPerDay > 3000) {
    console.log('High level of wealth');
} else {
    console.log('Ooops, smth went incorrect');
}
 