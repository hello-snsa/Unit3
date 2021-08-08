function runProgram(input) {

    input=input.trim();
    var n=Number(input);
    
    // console.log(n)


   function rec(n){
       if(n==0){
           return 0;
       }

    else if(n==1)
    {
        return 1;
    }
    else{

        return rec(n-1)+rec(n-2);
        
    }



   }
    console.log(rec(n));
    

    
    
    
    
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
    
    
    