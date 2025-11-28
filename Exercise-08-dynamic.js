// By dynamic method:(connected to Exercise-8(b).html file and will run in browser)

let maths=Math.random()
let a = Number(prompt("Enter your first number:"))
let b = prompt("Enter the operation that you want to perform:")
let c = Number(prompt("Enter your second number:"))

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

console.log(maths)
if(maths<0.1){
    b=obj[b]
    console.log(`the calculation is as follows:${a} ${b} ${c}`)
    console.log(`The result is: ${eval(`${a} ${b} ${c}`)}`)
}

else{
    console.log(`the calculation is as follows:${a} ${b} ${c}`)
    console.log(`The result is: ${eval(`${a} ${b} ${c}`)}`)
}