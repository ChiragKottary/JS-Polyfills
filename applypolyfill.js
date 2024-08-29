let person ={
    name : "chirag",
}
let person1 ={
    name : "thushar"
}
function showMyage(age){
        console.log(`${this.name}'s age is ${age}`)
    }

Function.prototype.myApply = function(obj,...args){
    if (typeof this !== "function") {
        throw new Error("not callable")
    }
    if (!Array.isArray(...args)) {
        throw new Error("TypeError: CreateListFromArrayLike called on non-object")
    }
    obj.fn = this;
    obj.fn(...args);
}    
showMyage.myApply(person,[12])