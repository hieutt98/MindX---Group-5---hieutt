function min(a,b){
    if (a>b){
        return console.log("a lớn hơn b");
    }
    if (a<b){
        return console.log("a nhỏ hơn b");
    }
    if (a==b){
        return console.log("a bằng b");
    }
}
let a = parseInt(prompt("Enter a: "));
let b = parseInt(prompt("Enter b: "));

let result = min(a,b);