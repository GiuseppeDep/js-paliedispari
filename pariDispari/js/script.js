
const userChoice = prompt("scegli pari o dispari");
const userNumberStr = prompt("dimmi un numero")
const userNumber = parseInt(userNumberStr);
const computerNumber = getRndInteger(1,6);

const sum = userNumber + computerNumber;
const result = pariDispari(sum);

let message = "";
if (result  === userChoice){
   message = "Hai Vinto"
} else {
message = "Hai Perso";
}
console.log(message); 


function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min) ) + min;
 }


function pariDispari(numberToCheck) {
   let result;
   if (numberToCheck % 2 === 0){
       result = "pari";
   } else {
       result = "dispari";

   }
   return result;
}
