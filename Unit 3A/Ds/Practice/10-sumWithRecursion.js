function runProgram(input) {

    input=input.trim();
      var newInput = input.split(/[\r\n]+/);
     
      var noOfQuery = Number(newInput[0]);
      
      for (var a = 1; a <= noOfQuery*2; a+=2) {
          
         
        var arr=newInput[a+1].split(" ").map(Number);
  
        // console.log("data",arr);
        var len=arr.length-1;
        var sum=0;

        rec(len);

        function rec(len){

            if(len<=0)
            {
                return;
            }
            else{
                
                sum+= Math.floor(Math.abs(arr[len]-arr[len-1]));
                len--;
                rec(len);


            }


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