
const num=[3,5,7,9,10]
const number=doubleNumber(num)

function doubleNumber(arr){
const doubleNumber=[]
    for (let number of arr)
    {doubleNumber.push(number*2)}
return doubleNumber;
}
console.log(number)
const userName={name:'Hana',age:19,gender:'female'}

function info(){
    for (let person in userName){
        console.log(`${person}=${userName[person]}`)
    }
}
info()

const word="student"
function spelling(){
    let counter = 1
    for(let i in word){
       
        setTimeout(()=>{
            console.log(word[i])
        },counter*1000)

        counter++
 } 


}

// setTimeout(spelling,1000)
spelling()
