function runProgram(input) {

  input=input.trim();
  var n= Number(input);
  // console.log(n)

  var a=0;
  var b=1;
  var c;
  var res= rec(n);
  
  function rec(){

      if(n==0||n==1)
      { 
          return b ;
      }
      else{
       n--;
       c=a+b;
       a=b;
       b=c;
      //  n--;
       
        return rec();
   
      }

  }
  console.log(res);
  

  
  
  
  
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
  
  
  