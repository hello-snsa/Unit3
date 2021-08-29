function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);



    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var data = newInput[a + 1].split(" ").map(Number);

        if (data.length == 1) {
            console.log(data[0]);
        } else {



            data.sort();

            // console.log("data", data);


            let temp = data[0];

            let res;

            for (let i = 1; i < data.length; i++) {
                if (temp != data[1]) {
                    res = temp;
                    break;
                }
                else {

                    // for (let j = i + 1; j < data.length; j++) {

                    if (data[i] != data[i + 1] && data[i] != data[i - 1]) {
                        res = data[i];
                        break;
                    }
                    // }

                }
            }

            console.log(res)
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