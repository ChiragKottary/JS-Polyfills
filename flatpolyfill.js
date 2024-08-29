let arr = [1,2,3,[[4,5,6]]]



Array.prototype.myFlat = function(depth){
    let res =[]
    depth = depth == undefined ? 1 :depth
    if(!Array.isArray(this)){
        throw new Error("not a fuction")
    }
    this.forEach((el)=>{
    if (Array.isArray(el) && depth>0) {
           res.push(...el.myFlat(depth-1)) 
    } else {
        res.push(el)
    }
    })
    return res
}
console.log(arr.myFlat(2));