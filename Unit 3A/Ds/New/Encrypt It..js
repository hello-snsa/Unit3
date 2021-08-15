function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    // var str = "All-convoYs-9-be:Alert1.";
    var str = newInput[0];
    var k = Number(newInput[1]);
    var kk = k;
    if (k >= 26) {
        let n = Math.floor(k / 26);
        k = k - (26 * n);

    }
    if (kk >= 10) {
        let n = Math.floor(kk / 10);
        kk = kk - (10 * n);

    }
    var data = [];

    // console.log("k ",k)

    console.log(fun())



    function fun() {

        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
                let newNum = str.charCodeAt(i) + kk;
                if (newNum > 57) {
                    newNum = newNum - 10;
                }
                data.push(newNum);
            }
            else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                let newNum = str.charCodeAt(i) + k;
                if (newNum > 90) {
                    newNum = newNum - 26;
                }
                data.push(newNum);
            }

            else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                let newNum = str.charCodeAt(i) + k;
                if (newNum > 122) {
                    newNum = newNum - 26;
                }
                data.push(newNum);
            }

            else {
                data.push(str.charCodeAt(i))
            }

        }
        // console.log("data  is ", data)


        let result = "";
        for (var i = 0; i < data.length; i++) {

            result += String.fromCharCode(data[i]);

        }
        return result;

    }

} //End of runProgram()

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
}); //End of program