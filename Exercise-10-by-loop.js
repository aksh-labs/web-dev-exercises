// ------------->>>>>>>>>>>Factorial calculator by loop<<<<<<<<<-------------

let fact=1
let number=Number(prompt("Enter your number: "))

for (let i = 1; i <=(number); i++) {

    fact=fact*i
}

console.log(fact)