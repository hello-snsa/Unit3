function runProgram(input) {

    
var newInput= input.split(" ").map(Number);

var data = newInput[0];

/*    
var newInput = input.split(/[\r\n]+/);
var length = Number(newInput[0]);
var data = newInput[1].split(" ").map(Number);
  
*/




}//End of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = ``;
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});//End of program


