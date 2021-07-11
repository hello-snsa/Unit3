function runProgram(input) {

    input=input.trim();
      var newInput = input.split(/[\r\n]+/);
     
      var noOfQuery = Number(newInput[0]);
      
      for (var a = 1; a <= noOfQuery*2; a+=2) {
          
         
        var arr=newInput[a+1].split(" ").map(Number);
  
        // console.log("data",arr);

let res=1;

function rec(n){

    if(n>=arr.length)
    return 1;
    else{
       return arr[n]*rec(++n);
        // n++;
        // rec(n)
        // return res;
    }

}
main();
function main(){
    let n=0;
    let result = rec(n);
    let fResult="";

    while(n<=arr.length-1){
        
        fResult += result/arr[n]+" ";
        n++;
        
        
    }
    console.log(fResult)
    // console.log(result)
}

      
         
  
          
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