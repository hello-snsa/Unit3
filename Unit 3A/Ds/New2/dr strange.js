function runProgram(input) {
    input = input.trim();


    var input = Number(input);


    var arr = [];
    var R;

    var ans = "";

    {
        let i = 1;
        while (i <= input) {
            arr.push(i);
            i++;
        }
    }

    R = arr.length - 1;



    function fun(ans, arr, F, R) {

        if (F <= R + 1 && ans != null) {
            console.log(ans.trim())
        }


        {
            let j = F;
            while (j <= R) {

                fun(ans + " " + arr[j], arr, j + 1, R)
                j++;
            }
        }

    }

    fun(ans, arr, 0, R);

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