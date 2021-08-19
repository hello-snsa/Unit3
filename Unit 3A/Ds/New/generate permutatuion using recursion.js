//not working
function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    let str = newInput[1];
    str = str.split(" ");
    str = str.map(Number);

    var arr = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    let len = newInput[0];
    len = Number(len);
    let result = "";

    fun(str, 0, 2)
    function fun(str, l, r) {
        if (l == r) {
            result += str;

        }
        else {

            var i = l;
            while (i <= r) {

                str = swapIt(str, i, l)
                fun(str, l + 1, r)

                i++;
            }
        }


    }
    function swapIt(str, i, l) {
        let temp = str[i];
        str[i] = str[l];
        str[l] = temp;
    }

    console.log(result)
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