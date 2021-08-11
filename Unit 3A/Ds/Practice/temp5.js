function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        // var str = newInput[a].split("");
        var str = newInput[a];

        //   console.log("data",data);


        let res = fun(str);
        console.log(res)

        function fun(str) {
            let lr = '\0';
            return removeIt(str, lr);

        }
        function removeIt(str, lr) {
            if (str.length == 0 || str.length == 1)
                return str;

            if (str.charAt(0) == str.charAt(1)) {
                lr = str.charAt(0);
                while (str.length > 1 && str.charAt(0) == str.charAt(1))
                    str = str.substring(1, str.length());
                str = str.substring(1, str.length());
                return removeIt(str, lr);
            }
            let rem = removeIt(str.substring(1, str.length), lr);


            if (rem.length() != 0 &&
                rem.charAt(0) == str.charAt(0)) {
                lr = str.charAt(0);


                return rem.substring(1, rem.length());
            }

            if (rem.length() == 0 && lr == str.charAt(0))
                return rem;


            return (str.charAt(0) + rem);


        }










    }//end of Query

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