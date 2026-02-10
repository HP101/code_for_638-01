const input = process.argv[2];
const numberCheck = Number(input); //convert to Number first to avoid coercion issues when checking isNan


if (isNaN(numberCheck)===false) { //checks for a false value for isNaN, which means the input is a number, not a string
    console.log("Please provide a string as an input");
    process.exit(1); //stop running code if input is not valid with code 1
} 

function checkVowels(input){
    word = input.split("");
    let numberofVowels = 0;
    for(i of word){
        if(i=="a"){
            numberofVowels++;
        } else if (i=="e"){
        numberofVowels++;
        }else if (i=="i"){
        numberofVowels++;
        }else if (i=="o"){
        numberofVowels++;
        }else if (i=="u"){
        numberofVowels++;
        }
    }
    return numberofVowels;
}

console.log(`The number of vowels in the word "${input}" is ${checkVowels(input)}`);
