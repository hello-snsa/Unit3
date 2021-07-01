function runProgram(input) {
 input=input.trim();
    var newInput = input.split(/[\r\n]+/);
   
    var noOfQuiery = Number(newInput[0]);
    
    for (var a = 1; a < noOfQuiery*2; a+=2) {
        
        
        
        var result="";
      var arr=newInput[a+1].split(" ").map(Number);
    //   console.log(arr)


    for(let i=0;i<arr.length-1;i++)
    {
        var isAvailable=true;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]<arr[j])
            {
                result+=arr[j]+" ";
                isAvailable=false;
                break;
            }

        }
        if(isAvailable)
        {
            result+= -1+" ";
        }
    }
    if(a*2 >noOfQuiery)
    result+= -1;
    console.log(result);
         
       

        
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