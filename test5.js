let index = 11;
let sum = 0;
let numbers = []

while(numbers.length < 10){
    if (checkIfPrime(index)){
        if (checkIfRightTrunk(index) && checkIfLeftTrunk(index)){
            numbers.push(index)
        }
    }
    index++;
}

console.log(numbers)

function checkIfPrime(number){
    if (number == 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0) return false;
    }
    return true;
}

function checkIfRightTrunk(number){
    let temp = number.toString(10)
    while (temp != ""){
        temp = temp.slice(0, -1)
        if(checkIfPrime(parseInt(temp)) == false){
            return false;
        }
    }
    return true;
}

function checkIfLeftTrunk(number){
    let temp = number.toString(10);
    while (temp != ""){
        temp = temp.substr(1);
        if(checkIfPrime(parseInt(temp)) == false) {
            return false;   
        }
    }
    return true;
}