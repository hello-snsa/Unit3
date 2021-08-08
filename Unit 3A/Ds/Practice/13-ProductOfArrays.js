function runProgram(input) {

    input=input.trim();
      var newInput = input.split(/[\r\n]+/);
     
      var noOfQuery = Number(newInput[0]);
      
      for (var a = 1; a <= noOfQuery*2; a+=2) {
          
         
        var arr=newInput[a+1].split(" ").map(Number);
  
        // console.log("data",arr);
let m=0;
let l=0;
let res=1;
let sum="";
function rec(n){

    if(n>=arr.length)
    return ;
    else{

        if(n!=l)
        {
           res*=arr[n];
        
        }
        
        
        n++;
        
        rec(n)
        return res;
    }

}

while(l<=arr.length-1){

     res=1;
     let result=rec(m);
     sum+=result+" "

     l++;
  
    }
    console.log(sum)

      
         
  
          
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