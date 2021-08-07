function runProgram(input) {

    input=input.trim();
   input=Number(input);


let res= fun(input);

    function fun (n)
    {
        if(n==0)
        return 1;
        else
        return n*fun(n-1)
    }

  
    console.log(res)

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