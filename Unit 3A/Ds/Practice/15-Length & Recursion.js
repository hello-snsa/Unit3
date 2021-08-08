function runProgram(input) {

    input=input.trim();
    var count=0;
    let n=0;
   
          
         
        var str=input.split("");
        // console.log("data",str);

    

        rec();
        function rec(){
            if(!str[n])
            {
                return;

            }
            else{
                count++;
                str.pop();
                rec();
            }
            

        }
        console.log(count)


      
         
  
          

   
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