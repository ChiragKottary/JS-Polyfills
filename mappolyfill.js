const arr = [1,2,3,4,5,6];

// arr.forEach((cb)=> console.log(cb))

Array.prototype.myMap = function(cb){
    let res =[]
    for (let index = 0; index < this.length; index++) {
         res.push(cb(this[index])) 
    }
    return res
}
const ans = arr.myMap((cb) => cb*2)
console.log(ans)