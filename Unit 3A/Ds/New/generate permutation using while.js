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

    function fun(str, len) {
        len = 0;
        let i = 0;
        while (i < str.length) {

            let j = str.splice(i, 1)[0];

            arr.push(j);
            if (str.length == 0) {
                let res = arr.slice()
                arr2.push(res);
            }

            fun(str, len);

            str.splice(i, 0, j);
            arr.push(" ")
            arr.pop();

            i++;

            arr.pop();
        }
        arr3 = arr2;
        return arr3;
    };

    let res = fun(str, len);

    let k = 0;
    while (k < res.length) {
        console.log(res[k].join(" "));
        k++;
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