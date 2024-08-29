let person ={
    name : "chirag",
}
let person1 ={
    name : "thushar"
}
function showMyage(age){
        console.log(`${this.name}'s age is ${age}`)
    }

Function.prototype.myCall = function(obj,...args){
    console.log(this)
    if (typeof this !== "function") {
        throw new Error("not callable")
    }
    obj.fn = this;
    obj.fn(...args);
}    
showMyage.myCall(person,12)