//Synchronous
console.log("A")
console.log("B")
console.log("C")

//const pro = new Promise((resolve, reject)=>{
    // const success=true;
    // if(success){
    //     console.log("Done")
    // }else{
    //     console.log("No")
    //} to make this asynchronous
//     setTimeout(()=>{
//         console.log("Done")
//     },0)
//     console.log("D")
// })

// pro.then(res=>{console.log(res)}).catch(err=>{console.log(err)})


function example(){
    console.log("Hi")
}

const example1=()=>{
    const a=10
    const b=15
    console.log(a+b)
}
setTimeout(example,3000)
setTimeout(example1,450)