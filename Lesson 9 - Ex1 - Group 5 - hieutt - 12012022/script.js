function checkAge(age){
    return (age>18) ? true : confirm("Did parents allow you ?");
}
let check = checkAge(prompt("Enter your age: "));

console.log(check);