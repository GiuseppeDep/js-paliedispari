const userWord = prompt("scrivi una parola")
const wordPalindrome = isPalindrom(userWord);

if (wordPalindrome === true) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");      
}

 function isPalindrom(wordToCheck) {
    let reverseWord = "";
for (let i = wordToCheck.length - 1; i >= 0; i --) {
const curLetter = wordToCheck[i];
reverseWord = reverseWord + curLetter;

}
return reverseWord === wordToCheck;

 }