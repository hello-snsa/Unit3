//Building a tatkal booking system.
let BtoG = ['abhishek', 'chandan', 'pulkit', 'manish', 'Debashish', 'sonam'];
let MtoG = ['abhishek', 'chandan', 'pulkit', 'manish', 'Debashish', 'sonam'];
let PtoG = ['abhishek', 'chandan', 'pulkit', 'manish', 'Debashish', 'sonam'];

//async await
// checkAvailability();
async function checkAvailability() {

    let promise = new Promise(function (resolve, reject) {

        setInterval(function () {

            console.log("Passengers Count: ",BtoG.length);
            // console.log("Passengers Count: ",MtoG.length);
            // console.log("Passengers Count: ",PtoG.length);

            if (BtoG.length < 5) {
                resolve('train 1 is available');
                clearInterval(interval);
            }
            else if (MtoG.length < 5) {
                resolve('train 2 is available');
                clearInterval(interval);
            }
            else if (PtoG.length < 5) {
                resolve('train 3 is available');
                clearInterval(interval);
            }

        }, 1000)
    })


    let res = await promise
    console.log('res: ', res);
    

}




function cancelTicket() {

    let cancelling_speed1 = Math.ceil(Math.random() * 5);
    let cancelling_speed2 = Math.ceil(Math.random() * 5);
    let cancelling_speed3 = Math.ceil(Math.random() * 5);

    setTimeout(function () {
        BtoG.pop()
    }, cancelling_speed1 * 1000);

    setTimeout(function () {
        MtoG.pop()
    }, cancelling_speed2 * 1000);

    setTimeout(function () {
        PtoG.pop()
    }, cancelling_speed3 * 1000)

    console.log()


    BtoG.pop()
    MtoG.pop()
    PtoG.pop()
    console.log('cancellation:', BtoG, MtoG, PtoG)
}
// checkAvailability();


function bookTicket(){
    let bookingFormData= document.getElementById("bookingForm");
    let pName=bookingFormData.pName.value;
    let pAddress=bookingFormData.pAddress.value;
    let pAadhar=bookingFormData.pAadhar.value;
    // console.log("passanger name",pName);

    let promise = new Promise(function (resolve, reject) {

        setInterval(function () {

        let isAvailable=true;

            if (BtoG.length < 5 && isAvailable==true) {
                resolve(BtoG.push(pName));
                isAvailable=false;

                clearInterval(interval);
            }
            else if (MtoG.length < 5 && isAvailable==true) {
                resolve(BtoG.push(pName));
                isAvailable=false;
                clearInterval(interval);
            }
            else if (PtoG.length < 5 && isAvailable==true) {
                resolve(BtoG.push(pName));
                isAvailable=false;
                clearInterval(interval);
            }

        }, 1000)
    })


}
                var interval = setInterval(cancelTicket, 2000);
              function xyz(){
                  
              }



















//1. Promise.race is settled as soon as any of the promise in array is settled (fulfilled or rejected).

//2. Promise.any is settled as soon as any of the promises you write in array is fulfilled or all rejected
