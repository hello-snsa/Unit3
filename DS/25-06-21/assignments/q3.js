//time complexity: O(n2);
//spaceComplexity: O(1)

function runProgram(input) {

    input=input.trim();
      var newInput = input.split(/[\r\n]+/);
     
         
          let result="";
         
        var data=newInput[1].split(" ").map(Number);
  
        // console.log("data",data);

        result+= -1+" ";
        for(let i=1;i<data.length;i++)
        { let isAvailable=true;
            for( let j=i-1;j>=0;j--)
            {
                if(data[i] > data[j]){
                result+= data[j]+" ";
                    isAvailable=false;
                    break;

                }
            }
            if (isAvailable)
            {
                result+= -1+" ";

            }
        }
       

         
  console.log(result);
          
  
   
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