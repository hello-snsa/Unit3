function runProgram(input) {

    input=input.trim();
      var newInput = input.split(/[\r\n]+/);
     
      var operation =[];
    //   var all

      for(let a=1;a<= Number(input[0]);a++)
      {
          operation.push(newInput[a][0]);
      }
      
      console.log("operations ",operation)
     
          
         for(var k=1;k<Number(newInput[0]);k++)
         {
        var data=newInput[k].split(" ");
        
         }
        var newData=data.map(Number);
        var arr=[];
        for(let i=0;i<data.length;i++)
        {
        if(newData[i])
        {
            // console.log(data[i])
            arr.push(data[i])
        }
    }
        // console.log("data",data);
        // console.log("arr",arr);
         
        console.log("inside",arr)
    if(data[0]=='E')
    {
        eOperation(arr);
    }
    else{
        dOperation(arr);

    }


    function eOperation(arr){
        console.log(arr.length);
    }

    function dOperation(arr){
console.log(" dOperation",arr)

        // console.log(arr.length);
        let result= "" //(arr[0])+" ";
    //    console.log("arr len ",arr, arr.length)
        if(arr.length==0)
        {
         result+= -1+" ";
        }
        else{
           
            result+=(arr[0])+" ";
        }
        arr.shift();
         result+= (arr.length);
        console.log(result)

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