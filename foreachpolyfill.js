const arr = [1,2,3,4,5,6];

// arr.forEach((cb)=> console.log(cb))

Array.prototype.myForeach = function(cb){
    for (let index = 0; index < this.length; index++) {
        cb(this[index])
    }
}
arr.myForeach((cb) => console.log(cb))