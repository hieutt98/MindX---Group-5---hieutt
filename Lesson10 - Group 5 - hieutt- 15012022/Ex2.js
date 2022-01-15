let obj ={
    b: 2,
    a: 1,
    c: 3,
};
let arr =  Object.keys(obj).toString() ;

let arrResult = arr.toUpperCase().split(",");
    
console.log(arrResult); 
document.getElementById("result-view").innerHTML= arrResult;