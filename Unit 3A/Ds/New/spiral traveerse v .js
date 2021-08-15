function runProgram(input) {
    input = input.trim();

    let newInput = input.split("\n");


    for (let a = 1; a < newInput.length;) {
        let n = Number(newInput[a]);


        let mat = newInput.slice(a + 1, a + n + 1).map((row) => {
            return row.split(" ").map(Number)
        })

        a += n + 1;
        fun(mat, n);

    }
}

let fun = (mat, n) => {
    let str = "";
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    let count = 0;
    let max = n * n;

    while (count < max) {
        for (let i = top; i <= bottom && count < max; i++) {

            str = str + mat[i][right] + " ";

            count++;
        }

        right--;

        for (let i = right; i >= left && count < max; i--) {


            str += mat[bottom][i] + " ";


            count++;
        }
        bottom--;

        for (let i = bottom; i >= top && count < max; i--) {
            str += mat[i][left] + " ";

            count++;
        }
        left++;

        for (let i = left; i <= right && count < max; i++) {
            str += mat[top][i] + " ";

            count++;
        }
        top++;

    }

    console.log(str);

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