let obj = {
    foo: {a: "hello", b: "world"  },
    bar: [ "example","mem", null, {xyz: 6}, 88],
    qux: [4, 8, 12],
    
} 
// Cách 1
console.log("Cách 1");
console.log ( " Trước khi đổi xyz = " + (obj.bar[3].xyz) );
obj.bar[3].xyz = 606;
console.log(" Sau khi đổi xyz = " + (obj.bar[3].xyz));    

//Reset
console.log("------------");
console.log("Reset giá trị xyz = 6");
obj.bar[3].xyz = 6;
console.log("------------");

// Cách 2
console.log("Cách 2");
console.log("Trước khi đổi xyz = " + obj["bar"][3]["xyz"]);
obj["bar"][3]["xyz"] = 606;
console.log("Sau khi đổi xyz = " + obj["bar"][3]["xyz"]);
// console.log(obj);