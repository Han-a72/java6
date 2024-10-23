
const num=[3,5,7,9,10]
function doubleNumber(){

    for (let num2 of num)
    {console.log(num2*2)}

}
doubleNumber()
const userName={name:'Hana',age:19,gender:'female'}

function info(){
    for (let person in userName){
        console.log(`${person}=${userName[person]}`)
    }
}
info()

const word="student"
function spelling(){
    for(let i in word){
        console.log(word[i])
    }
}
spelling()
