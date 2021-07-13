function runProgram(newInput) {

    newInput=newInput.trim();

    var input=newInput.split("\n");


    var arr=[];
    var len=0;
    var n=0;
    

    rec();

    function rec(){
        console.log("len",len)
        if(input[len]=="-1")
        {
            return
        }
        else{
            arr.push(input[len])
            ++len;
            // arr.shift();
            rec()
        }
    }
console.log(arr)

    function sortIt(){

        if(n==arr.length-1)
        {
            return
        }

        else{

            if(arr[n]<arr[n+1])
            {
            var c=arr[n+1]
            arr[n+1]=arr[n]
            arr[n]=c;
            n++;
            sortIt();
            }
            
            // else{
            //     continue;
            // }


        }



    }
    var num=0;
    var data=[];
function doAgain(){
   
   if(num>=arr.length)
   {
       return
   }
   else{
       data.push(arr[arr.length-1])
       arr.pop();
    n=0;
    num++;
   sortIt();
   }
}
doAgain();
console.log("sorted",arr)
console.log("sorted data",data)
    
    
    
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
    
    
    