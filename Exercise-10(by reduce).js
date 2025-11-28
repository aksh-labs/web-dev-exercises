// ----------->>>>>>>>>>Factorial calculator by reduce method<<<<<<<<<<-----------

let numArr=[]
let number=Number(prompt("Enter your number: "))

for (let i = 1; i <=(number); i++) {
    numArr.push(i)
}

const fact=(a,b)=>{
    return a*b
}

console.log(numArr.reduce(fact))