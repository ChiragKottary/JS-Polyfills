const arr = [1,2,3,4,5,6];

// arr.forEach((cb)=> console.log(cb))

Array.prototype.myForeach = function(cb){
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }  
}
arr.myForeach((cb) => console.log(cb))