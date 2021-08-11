function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var str = newInput[a].split("");

        //   console.log("data",data);


        let newstr = [];
        if (str[0] != str[1])
            newInput.push(str[0])
        // str.sort();
        fun(1);
        if (newstr.length == 0)
            console.log('Empty String');
        else
            console.log(newstr.join(""));



        function fun(i) {
            if (str[i] != str[i - 1] && str[i] != str[i + 1]) {
                newstr.push(str[i])
            }

            if (i < str.length - 1) {
                fun(i + 1);
            }
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