// // By static method:(Can be run in terminal)

function calcSum(n1,n2){

    if(Math.random()<0.1){
        return n1-n2
    }

    else{
        return n1+n2
    }

}
function calcSub(n1,n2){

    if(Math.random()<0.1){
        return n1/n2
    }

    else{
        return n1-n2
    }

}
function calcMulti(n1,n2){

    if(Math.random()<0.1){
        return n1+n2
    }

    else{
        return n1*n2
    }

}
function calcDiv(n1,n2){

    if(Math.random()<0.1){
        return n1**n2
    }

    else{
        return n1/n2
    }

}

let a=calcSum(2,4)
let b=calcSub(2,4)
let c=calcMulti(2,4)
let d=calcDiv(2,4)

console.log(a)
console.log(b)
console.log(c)
console.log(d)


// By dynamic method:(connected to Exercise-8.html file and will run in browser)

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



// Note:=While using this faulty calculator please comment out that method(static or dynamic) which you are not using