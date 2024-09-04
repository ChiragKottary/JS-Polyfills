let arr =[1,2,3,4,5,[6,7],8]
//shallow copy this works if the array is flated
// let b = [...arr];
//if its nested array we use
// let c = JSON.parse(JSON.stringify(arr))
const obj = {
    a1:{
        b1:{
            c1:"ss",
            
        }
    }
}
let obj2 = deepcopy(obj) 
obj.a1.b1 = null
function deepcopy(val){
    if (["string","boolean","number"].includes(typeof val)) {
        return val
    }
    else if (Array.isArray(val)) {
        return val.map((el)=>deepcopy(el))
    } else{
        return Object.keys(val).reduce((acc,key)=>{
            acc[key] = deepcopy(val[key]);
            return acc
        },{});
    }
}
b = deepcopy(arr)
b[5].push(20);

console.log(obj);
console.log(obj2);