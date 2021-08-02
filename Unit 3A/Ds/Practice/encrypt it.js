function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var str = newInput[0];
    var k = Number(newInput[1]);
    if (k > 26) {
        let n = Math.floor(k / 26);
        k = k - (26 * n);

    }

    var data = [];
    var newStr = [];

    var str1 = "abcdefghijklmnopqrstuvwxyz";
    var str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str3 = "0123456789";

    for (var i = 0; i < str.length; i++) {
        data.push(str.charCodeAt(i));
    }

    for (i = 0; i < str.length; i++) {
        if (str1.includes(str[i]) || str2.includes(str[i]) || str3.includes(str[i])) {

            data[i] = data[i] + k;
        }
    }

    for (var i = 0; i < data.length; i++) {
        var text = String.fromCharCode(data[i]);
        newStr.push(text);
    }

    console.log(newStr.join(""));


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
