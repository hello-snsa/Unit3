function runProgram(input) {

    input=input.trim();
    var newInput = input.split(/[\r\n]+/);
    var arr= newInput[1].split(" ").map(Number);
    // console.log(arr)


    for(var i=0;i<arr.length;i++)
    {
       
        for(var j=0;j<arr.length;j++)
        {
            var c;
            if(arr[j]>arr[j+1])
            {
                c= arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=c;
              
            }
         
        }
     
    }
console.log(arr.join(" "))
 

    
    
    
    
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
    
    
    