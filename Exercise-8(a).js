// ------------------>>>>>>>>>>Faulty Calculator<<<<<<<<<<<<-------------------------

// By static method:(Will run in terminal)


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

