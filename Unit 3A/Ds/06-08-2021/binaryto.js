function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var num = Number(newInput[a]);



        convertToBinary(num);


        function convertToBinary(n) {
            let binary = 0;
            let rem;
            let i = 1;
            while (n != 0) {
                rem = n % 2;

                n = parseInt(n / 2);
                binary = binary + rem * i;
                i = i * 10;
            }
            console.log(binary);
        }







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