var prompt = require('prompt-sync')();


do {
console.log("\n1:Cocate \n2:compare \n3:copy \n4:Exit");
var ch = parseInt(prompt("Enter your choice: "));


switch (ch) {

case 1 : var buf = Buffer.from("SBUPss SCSsssss ");
var un = buf.slice(0, 5);
var clg = buf.slice(5, 8);

console.log("un is: " , un.toString());
console.log("clg is: ", clg.toString());

concat = Buffer.concat([un, clg]);
console.log("Full name : ", concat.toString());
break;

case 2 :
var s1 = Buffer.from("SCST");
var s2 = Buffer.from("SCTTS");

var status = Buffer.compare(s1,s2);
console.log("Status : ", status.toString());

if (status == 0) {
    console.log("Both buffers are equal.");
}
break;

case 3 :
var c1 = Buffer.from("knowledge     career")
var c2 = Buffer.from("for");

c2.copy(c1, 10,0, ); 

console.log(c1.toString());
break;

case 4 :
console.log("Exiting the program.");
break;

default: console.log("Invalid choice. Please enter 1, 2, or 3.");

}

}while (ch != 4);