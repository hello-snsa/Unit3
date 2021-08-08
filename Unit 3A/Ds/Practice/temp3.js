function runProgram(input){
    var data = input.split(" ");
    var str = data[0];
    var b = Number(data[1]);
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    var number = sum * b;
    
    function fsum(n) {
      if (n >= 0 && n <= 9) {
        return n;
      } else {
        n = (n % 10) + Math.floor(n / 10);
        return fsum(n);
      }
    }
    console.log(fsum(number));
    }
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
       runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    });