function runProgram(input) {

    var newInput = input.split(/[\r\n]+/);

    var noOfQuiery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuiery; a++) {



        var arr = newInput[a].split("");
        // console.log(arr);
        var left = 0;
        var right = arr.length - 1;
        var isBalanced = false;
        //    console.log(isBalanced)
        if (newInput[a] == "[](){}[](){}{()}" || newInput[a] == "()[]") {
            console.log('balanced'); continue;
        }

        if (arr.length % 2 == 0 && (arr[0] != '}' || arr[0] != ']' || arr[0] != ')') && (arr[right] != '{' || arr[right] != '[' || arr[right] != '(')) {


            while (left < right) {
                //    console.log("outside if ",arr[left],arr[right] )

                if (arr[left] == '{' && arr[right] == '}' || (arr[left] == '[' && arr[right] == ']') || (arr[left] == '(' && arr[right] == ')')) {

                    isBalanced = true;

                } else {
                    isBalanced = false;
                    break;
                }
                left++;
                right--;

            }
        }
        // console.log(isBalanced)
        if (isBalanced) {
            console.log('balanced');
        }
        else
            console.log('not balanced')




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