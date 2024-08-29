const arr = [1,2,3,4,5,6];

// const ans = arr.reduce((acc,cur)=>{
//     return acc+cur
// },0)
// console.log(ans)

Array.prototype.myReduce = function(cb,intalvalue){
    let acc = intalvalue
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc,this[i]): this[i];
    }
    return acc
}
const ans = arr.myReduce((acc,cur)=>{
    return acc+cur
})
console.log(ans)