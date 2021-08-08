function runProgram(input) {

  input = input.trim();
  input = Number(input);

  let res = steps(input);

  function steps(n) {

    if (n == 1 || n == 0)
      return 1;
    else if (n == 2)
      return 2;
    else return steps(n - 3) + steps(n - 2) + steps(n - 1);

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