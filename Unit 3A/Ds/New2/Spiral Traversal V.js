function runProgram(input) {

    input = input.trim();

    var newInput = input.split(/[\r\n]+/);


    var testcase = Number(newInput[0]);
    var r = 0;

    for (var a = 0; a < testcase; a++) {

        var dim = newInput[r + a + 1].split(" ").map(Number);
        var rows = dim[0];
        // var cols = dim[1];
        var n = newInput[a + 1];
        console.log("N is ", n)

        var mat = newInput.slice(r + a + 2, r + a + 2 + rows)
            .map(function (row) {
                return row.split(" ").map(Number);
            });

        r = r + rows;

        // console.log(mat);



        var res = fun(mat, n);
        console.log(res);

        function fun(mat, n) {

            var left = 0;
            var right = n - 1;
            var top = 0;
            var bottom = n - 1;

            var max = n * n;

            var str = "";
            var count = 0;



            while (count < max) {

                //right wall
                for (var i = top; i <= bottom && count < max; i++) {

                    str += mat[i][right] + " ";

                    count++;
                }

                right--;



                //bottom wall
                for (var i = right; i >= left && count < max; i--) {


                    str += mat[bottom][i] + " ";


                    count++;
                }
                bottom--;

                //left wall

                for (var i = bottom; i >= top && count < max; i--) {
                    str += mat[i][left] + " ";

                    count++;
                }
                left++;

                //top wall

                for (var i = left; i <= right && count < max; i++) {
                    str += mat[top][i] + " ";

                    count++;
                }
                top++;



            }


            return str;
        }

    }//end of query
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