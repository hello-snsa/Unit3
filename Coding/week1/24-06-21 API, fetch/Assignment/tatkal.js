console.log("Script tatkal.js is working.")

let train1Passangers = ['ali', 'snsa', 'ajit', 'amar', 'sohel', 'ravi', 'komal'];
let train2Passangers = ['ali', 'snsa', 'ajit', 'amar', 'sohel', 'ravi', 'komal'];
let train3Passangers = ['ali', 'snsa', 'ajit', 'amar', 'sohel', 'ravi', 'komal'];

var interval = setInterval(cancelTicket, 1000);

function cancelTicket() {

    let train1CancellationSpeed = Math.ceil(Math.random() * 5);
    let train2CancellationSpeed = Math.ceil(Math.random() * 5);
    let train3CancellationSpeed = Math.ceil(Math.random() * 5);





    setInterval(function () {
        train1Passangers.pop();
    }, train1CancellationSpeed * 1000)

    setInterval(function () {
        train2Passangers.pop();

    }, train2CancellationSpeed * 1000)

    setInterval(function () {
        train3Passangers.pop();

    }, train3CancellationSpeed * 1000)


    console.log(train1Passangers);
    console.log(train2Passangers);
    console.log(train3Passangers);


}

async function searchTicket() {

    let myPromise = new Promise(function (resolve, reject) {

        setInterval(function () {
            if (train1Passangers.length < 5) {
                resolve('train 1 is available');
            }
            else if (train2Passangers.length < 5) {
                resolve('train 2 is available');
            }
            else if (train3Passangers.length < 5) {
                resolve('train 3 is available')
            }

        }, 1000)


    })//promise ends

    let res = await myPromise;
    console.log('res: ', res);
    alert(res)
    clearInterval(interval)
}//function ends




