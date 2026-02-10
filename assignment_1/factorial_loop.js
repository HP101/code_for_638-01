const input = process.argv[2];
const number = Number(input); //convert to Number first to avoid coercion issues when checking isNan


if (isNaN(number)) {
    console.log("Please provide a non-negative integer");
    process.exit(1); 
}//stop running code if input is not valid
else if (number < 0) {
    console.log("Please provide a non-negative integer");
    process.exit(1); //stop running code if input is not valid   
} else if (number == 0 || number == 1) {
     console.log(`The factorial of ${number} is 1`);
    process.exit(0); //stop running code if input is not valid   
} else if (Number.isInteger(number)=== false){
    console.log("Please provide a non-negative integer");
    process.exit(1); //stop running code if input is not valid   
}

function factorial (number){
    let value = number*(number-1);
    number --;
    while (number>1){
        value = value*(number-1);
        number--;
    }
    return value;
}

console.log(`The factorial of ${number} is ${factorial(number)}`);