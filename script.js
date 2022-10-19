// Типы данных

// ---------- Число (number) ------------

let a = 1;
let b = 2.3;

alert(a+b);  // 3.3

alert(b-a);  // 1.299999999998 - особенность JS

alert(a/0);  // Infinity - бесконечность

alert("string" / a)  // NaN - не число. Not a Number. Результат вычислительной ошибки. При этом ошибки в выполнении программы не будет!

alert(typeof(a)); //  функция typeof выведет тип содержимого в переменной



// ---------- bigInt - большие числа --------------

const c = 1234567890022345457657897789545645n; // Числа больше 2^53 - 1. n - в конце означает bigInt

alert(typeof(c));



// ---------- Строки ------------

let str = "Строка 1!";

let str2 = 'Одинарные кавычки тоже нормально. ';

let str3 = `Обратные кавычки позволяют встраивать переменные. ${str}`;

alert(str2 + str3);

let str4 = ` В обратные кавычки можно встраивать и выражения: 2 + 3 = ${2 + 3}`;

alert(str4);

alert(typeof(str4));

// ----------- boolean (логический тип) ----------

let checked = true;

alert(checked);

checked = !true;

alert(checked);

alert(typeof(checked));

let isGreater = 4 > 1;

alert(isGreater);



// ---------- null -----------

let age = null // просто специальное значение (пустое, ничего, значение неизвестно)

alert(typeof(age)); // object!


// ----------- undefined ------------- не определено!

let variable;

alert(typeof(variable));


// ---------- object --------

const obj = {name: 'Dmitry', age: 18};

alert(typeof(obj));

alert(obj.name + ', ' + obj.age);