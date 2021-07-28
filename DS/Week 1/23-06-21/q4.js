function runProgram(input) {

    var newInput = input.split(/[\r\n]+/);

    var noOfQuiery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuiery; a++) {



        var arr = newInput[a].split("");
        // console.log(arr);
        let last = arr.length - 1;
        var left = 0;
        var right = arr.length - 1;
        var isBalanced = true;
        let data = [];



        if ((arr[0] == ')' || arr[0] == ']' || arr[0] == '}') || (arr[last] == '(' || arr[last] == '[' || arr[last] == '{') || (last + 1) % 2 != 0) {
            console.log("not balanced");
            // isBalanced = false;

        }

        else {

            while (left <= right) {
                if (arr[left] == '{' || arr[left] == '[' || arr[left] == '(') {

                    data.push(arr[left]);
                    // console.log("data push", data)
                }
                else {

                    let check = checkIt(arr[left], data[data.length - 1]);
                    // console.log("check", check)

                    if (data.length <= 0 || !check) {


                        isBalanced = false;
                        break;

                    }
                    else {

                        data.pop();
                        // console.log("data pop", data)
                    }
                }
                left++;

            }

            if (isBalanced)
                console.log("balanced")
            else {
                console.log('not balanced');
            }

        }


        function checkIt(a, b) {
            if ((a == '(' && b == ')') || (a == '[' && b == ']') || (a == '{' && b == '}')) {
                return true;
            }
            else return false;

        }


    }//end of Quiery

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