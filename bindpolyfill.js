let person ={
    name : "chirag",
}
let person1 ={
    name : "thushar"
}
function showMyage(age, year){
        console.log(`${this.name}'s age is ${age} and born in ${year}`)
    }

Function.prototype.myBind = function(obj,...args){
    if (typeof this !== "function") {
        throw new Error("not callable")
    }
    obj.fn = this;
    return function(...arg1){
    obj.fn(...args,...arg1);
    }
    
}    
let res = showMyage.myBind(person, 12)
res(2002);