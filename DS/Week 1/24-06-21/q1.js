function runProgram(input) {

    
    var newInput= input.split("\n");
    
    var arr = newInput[1].split(" ").map(Number);
    // console.log(arr)
    let result="";
    
    
    for(var i=0;i<arr.length;i++)
    {
        let isAvailable=true;
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[j]>arr[i])
            {
                isAvailable=false;
                break;
            }
        }
        if(isAvailable==true)
        result+= arr[i]+" ";
    }
    console.log(result)

    
    
    
    
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
    
    
    