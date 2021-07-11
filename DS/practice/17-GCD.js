function runProgram(input) {

    input=input.trim();
      var newInput = input.split(/[\r\n]+/);
     
      var noOfQuery = Number(newInput[0]);
      
      for (var x = 1; x <= noOfQuery; x++) {
          
         
        var data=newInput[x].split(" ").map(Number);
  
        // console.log("data",data);
        let a= data[0];
        let b= data[1];
      

        let res= rec(a,b);


        function rec(a,b){

               
                a=a%b;   
             

                if(a==0)
                {
                    return b;
                }
                else{

               return rec(b,a)

               
                }


            

        }
        console.log(res)


          
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