
let s = 'All-convoYs-9-be:Alert1.';
let n = 4;

let res = main(s, n);
console.log(res);

function main(s, n) {
    let a = 0;

    for (let i = 0; s[i] != '\0'; i++) {

        if ((a >= 48) && (a <= 57)) {
            a = s[i];
            if ((57 - a) < n) {
                console.log("%c", (47 + n - 57 + a));
            }
            else
                console.log("%c", a + n);
        }

        else if ((a >= 65) && (a <= 90)) {

            if ((90 - a) < n) {
                console.log("%c", (64 + n - 90 + a));
            }

            else
                console.log("%c", a + n);
        }
        else if ((a >= 97) && (a <= 122)) {
            if ((122 - a) < n) {
                console.log("%c", (96 + n - 122 + a));
            }
            else
                console.log("%c", a + 4);
        }
        else
            console.log("%c", s[i]);


    }
    return 0;
}