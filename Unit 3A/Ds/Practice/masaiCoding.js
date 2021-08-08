function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var a1 = [];
    var a2 = [];
    var a3 = [];
    var a4 = [];
    var arr = [];
    var query = Number(newInput[0]);

    for (var a = 1; a <= query; a++) {


        var data = newInput[a].split(" ");
        if (data[0] == "E") {

            if (data[1] == 1) {

                if (arr.length == 0 || !isAvailable(1) == true) {
                    arr.push(data[1]);
                }

                a1.push(data[2]);
            }
            if (data[1] == 2) {

                if (arr.length == 0 || !isAvailable(2) == true) {
                    arr.push(data[1]);
                } a2.push(data[2]);
            }
            if (data[1] == 3) {
                if (arr.length == 0 || !isAvailable(3) == true) {
                    arr.push(data[1]);
                } a3.push(data[2]);
            }
            if (data[1] == 4) {
                if (arr.length == 0 || !isAvailable(4) == true) {
                    arr.push(data[1]);
                } a4.push(data[2]);
            }
        }

        else if (data[0] == "D") {
            if (arr.length !== 0) {

                if (arr[0] == 1) {
                    console.log(1, a1[0]);
                    a1.shift();
                    if (a1.length == 0) {
                        arr.shift();
                    }
                }
                else if (arr[0] == 2) {
                    console.log(2, a2[0]);
                    a2.shift();
                    if (a2.length == 0) {
                        arr.shift();
                    }
                }
                else if (arr[0] == 3) {
                    console.log(3, a3[0]);
                    a3.shift();
                    if (a3.length == 0) {
                        arr.shift();
                    }
                }
                else if (arr[0] == 4) {
                    console.log(4, a4[0]);
                    a4.shift();
                    if (a4.length == 0) {
                        arr.shift();
                    }
                }
            }

        }

        function isAvailable(n) {
            for (let a = 0; a < arr.length; a++) {
                if (n == arr[a]) {
                    return true;
                }
            }
            return false;
        }

    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});