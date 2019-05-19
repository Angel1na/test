"use strict";

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");



var appData = {};
appData.budget = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;

var a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Введите обязательную статью расходов в этом месяце"),
    a3 = prompt("Во сколько обойдется ? "),
    a4 = prompt("Во сколько обойдется ? ");

appData.expenses[a1] = a3;
appData.expenses[a2] = a4;

var dat = appData.budget / 30;
alert(dat);
console.log(appData, dat);