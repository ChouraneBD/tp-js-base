// var x = 5
// let y = 10
// const z = 15

// z = 35

// console.log(z)

// function testScope() {
// if (true) {
// var a = "var visible partout";
// let b = "let visible ici seulement";
// }
// console.log(a);
// console.log(b); // Pourquoi erreur ?
// }
// testScope();

// function sayHello(name) {
// return `Bonjour ${name}`;
// }
// const sayHelloArrow = (name) => `Bonjour ${name}`;

// console.log(sayHello("badreddine"));
// console.log(sayHelloArrow("omar"))

// const fruits = ["pomme", "banane", "orange"];
// fruits.push("kiwi"); 
// fruits.pop();        
// console.log(fruits);

// import message, { PI, carre } from "./mathUtils.js";
// message(); // �� Module mathUtils chargé !
// console.log("PI =", PI);
// console.log("Carré de 5 =", carre(5));

// const nums = [1, 2, 3, 4, 5];
// // console.log(nums.map(n => n * 2));
// // console.log(nums.filter(n => n % 2 === 0));
// // console.log(nums.reduce((sum, n) => sum + n, 0));


// console.log(nums.find(n => n > 3));
// console.log(nums.some(n => n > 0));
// console.log(nums.every(n => n > 0));


// const user = { id: 1, name: "Ali", city: "Rabat" };
// const { name, city } = user;
// console.log(`${name} habite à ${city}`);
// const { name: fullName, ...rest } = user;
// console.log(fullName);
// console.log(rest);


// const p = new Promise((resolve) => {
//   setTimeout(() => resolve("Opération terminée !"), 2000);
// });
// p.then(result => console.log(result));


// async function getUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.error("Erreur :", e.message);
//   }
// }
// getUsers();


// const name = "Nadia";
// const hour = new Date().getHours();
// console.log(`Bonjour ${name}, il est ${hour}h`);


// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2);

// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4));


// const settings = { theme: null };
// console.log(settings.theme ?? "light");

// const user2 = { profile: { email: "x@y.com" } };
// console.log(user2.profile?.email);
// console.log(user2.address?.city);


const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
