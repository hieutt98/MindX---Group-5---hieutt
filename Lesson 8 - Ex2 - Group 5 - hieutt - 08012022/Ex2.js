
function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

    for (let i=2 ; i<n ; i++){
        if( n%i==0 ) {
            flag = 0;
            break;
            }
    }

    return flag;
}

let n = prompt("Enter a positive number: ");
    

let check = isprime(n);

if  ( check == 1 ) {
    console.log(n + " la so nguyen to");
    document.getElementById("result-view").innerHTML = `${n} là số nguyên tố`;
} else {
    console.log(n + " khong phai la so nguyen to");
    document.getElementById("result-view").innerHTML = `${n} không phải là số nguyên tố`;
}
