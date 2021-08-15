function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);
    // var len=Number(newInput[0]);
    var str = newInput[1].split(" ").map(Number);

    var arr = [];
    var arr2 = [];

    function fun(str) {

        for (let i = 0; i < str.length; i++) {

            let j = str.splice(i, 1)[0];

            arr.push(j);
            if (str.length == 0) {
                arr2.push(arr.slice());
            }

            fun(str);

            str.splice(i, 0, j);

            arr.pop();

        }
        return arr2;
    };

    let res = fun(str);


    for (var k = 0; k < res.length; k++)
        console.log(res[k].join(" "));
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