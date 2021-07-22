function runProgram(input) {

    input=input.trim();
    var data=input.split("\n");

    var str= data[1];
    
    // console.log(str)
    
    for(let i=0;i<str.length;i++)
    {
      // console.log("inside i")
      let result2="";
      for(let j=i;j<str.length;j++)
      {
        // console.log("inside j")
        
        let result="";
        for(let k=i;k<=j;k++)
        {
          // console.log("inside k")
          result+=str[k]; 
        }
        result2+=str[j]
        console.log(result)
      }
      console.log(result2)
    }


    
    
    
    
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
    
    
    