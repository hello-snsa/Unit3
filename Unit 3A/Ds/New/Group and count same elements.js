function runProgram(input) {

    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var query = Number(newInput[0]);

    for (var a = 1; a <= query; a++) {

        let n = Number(newInput[a])

        //    console.log(n)


        let res = fun(n)
        console.log(res);


        function fun(n) {

            let arr = "11";

            if (n == 1)
                return "1";

            if (n == 2)
                return "11";


            for (let i = 3; i <= n; i++) {


                arr += ' ';
                let temp = "";

                let count = 1;

                let str = arr.split("");

                for (let j = 1; j < arr.length; j++) {

                    if (str[j] != str[j - 1]) {

                        temp += count + 0;

                        temp += str[j - 1];

                        count = 1;
                    }

                    else count++;
                }
                arr = temp;
            }
            return arr;
        }

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