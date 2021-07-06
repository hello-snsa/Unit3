function runProgram(input) {

    input=input.trim();
    
    // console.log(input)
    var len= input.length-1;

    var str=[];
   rec(len);
   

    function rec(len){

        if(len<0)
        {
           return;
        }
        else{
            str.push(input[len]);
            len--;
            rec(len)

           
            
        }

    }
    console.log(str.join(""));
    

    
    
    
    
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
    
    
    