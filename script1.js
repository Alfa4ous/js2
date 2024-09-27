'use strict'
// Задание 1
let name = "Джон";
let admin = name;
console.log(admin);
// Задание 2
let city = prompt('Введите название города');
let years = Number(prompt('Введите год образования'));
let people = Number(prompt('Введите население'));
alert(`Городу ${city} исполнилось ${2024 - years} лет с момента его образования. Население ${people} человек.`);
//Задание 3
let r = prompt('Введите радиус круга');
console.log(`Площадь круга ровна ${3.14*r*r}` );
// Задание 4
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
console.log(`Итак, разность = ${a-b}, сумма = ${a+b}, разность = ${a/b}, произведение = ${a*b}`);