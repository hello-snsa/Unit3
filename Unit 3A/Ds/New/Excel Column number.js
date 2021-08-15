function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var data = newInput[a];
        // console.log(data)

        let res = fun(data);

        function fun(data) {

            let result = 0;
            for (let i = 0; i < data.length; i++) {
                result *= 26;
                result += data[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;

            }
            return result;
        }


        console.log(res)


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