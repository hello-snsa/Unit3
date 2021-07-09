function runProgram(input) {

    input=input.trim();
    var newInput = input.split(/[\r\n]+/);
    var arr= newInput[1].split(" ").map(Number);
    // console.log(arr)

    var min=arr[0];
    var lastMin=-1;
    var len= arr.length-1;
    var newArr=[];

    while(len==0){
// checkIt();
checkIt(len);
}

    function checkIt(len){
        
        if(len<0)
        {
            return;
        }
        
        else{
            // console.log("inside")
            if(arr[len]<lastMin){
                lastMin=arr[len];
                newArr.push(lastMin);
            }
            if(arr[len]<min&& arr[len]>lastMin){
                min=arr[len];
                newArr.push(min);

            }

            len--;
            checkIt(len);

        }
    }

    console.log(newArr)
    

    
    
    
    
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
    
    
    