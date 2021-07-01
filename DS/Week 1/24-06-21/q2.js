function runProgram(input) {

    var newInput = input.split(/[\r\n]+/);
   
    var noOfQuery = Number(newInput[0]);
    
    for (var a = 1; a <= noOfQuery*2; a+=2) {
        
       
      var arr=newInput[a+1].split(" ").map(Number);
      console.log(arr)
       

        
    }//end of Quiery
 
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
