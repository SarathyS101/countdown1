const number = 8;
if(number%2==0){
    console.log(`${number} is even`)
}else{
    console.log(`${number} is odd`)
}
console.log(number%2===0?`${number} is even`:`${number} is odd`)

switch(number){
    case 0:
        console.log("woah")
    case 8:
        console.log("WOAHAHAHA")
        break
    case 10:
        console.log("Bad")
    default:
        console.log("fat")
}
//Types of functions

function poop(name){
    console.log(`Hello ${name}`)
}

const greeting =(name)=>{
    `Hello ${name}`
}

//Arrays
let names = [1,2,3,4,5,6,9]

//for each
names.forEach((name)=>console.log(name))

//mapping

let doubled = names.map((name)=> name*2)
console.log(doubled)