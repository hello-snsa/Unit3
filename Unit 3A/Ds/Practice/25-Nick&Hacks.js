function runProgram(input) {

  input=input.trim();
    var newInput = input.split(/[\r\n]+/);
   
    var noOfQuery = Number(newInput[0]);
    
    for (var a = 1; a <= noOfQuery; a++) {
        
       
      var data=Number(newInput[a]);

      // console.log("data",data);

      function fun(n,k)
      {
        if(n==k)
        return true;
        if(k>n)
        return false;
        return fun(n,k*10)||fun(n,k*20);

      }
      function main(){

        if(fun(data,1))
        {
          console.log("Yes")
        }
        else{
          console.log("No")
        }
      }
      main();
              
    }//end of Query
 
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