function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var num = Number(newInput[a]);

        // console.log("data",data);

        let res = convertIt(num);



        function convertIt(n) {

            let data = "";

            if (n < 1) {
                return "";

            }
            else {
                data += convertIt(Math.floor(n / 2)) + n % 2;
            }
            return data;
        }

        console.log(convertIt(num))

    }//end of Query

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