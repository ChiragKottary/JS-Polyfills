let promis = new Promise((resolve,reject)=>{
    let data = 2;
    setTimeout(function(){
        console.log(data);
        if (0) {
            resolve("function resolved")
        }else{
            reject("rejected")
        }    
    },1000)
  
})
// promis.then((resolve)=>{
//     console.log(resolve)

// }).catch((reject)=>{
// console.log(reject)
// })

async function fun(){
    let response = await promis
try{
console.log(response)
}catch(err){
console.log(err);
}
    
}

fun()






