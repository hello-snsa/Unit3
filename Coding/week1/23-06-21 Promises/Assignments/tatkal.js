console.log("script tatkal.js is working ");

//passanger data
let BtoG=['abhi','ali','snsa','mahesh','pulkit','lokesh','babul'];
let MtoG=['abhi','ali','snsa','mahesh','pulkit','lokesh','babul'];
let PtoG=['abhi','ali','snsa','mahesh','pulkit','lokesh','babul'];

//async await

async function checkAvailability(){

    let myPromise = new Promise(function (resolve,reject)
    {

        setInterval(function (){

            if(BtoG.length<4)
            {
                resolve('train 1 is available');
                clearInterval(interval);
            }
            else if(MtoG.length<4)
            {
                resolve('train 2 is available ');
                clearInterval(interval);
            }

            else if(PtoG.length<4)
            {
                resolve('train 3 is available');
                clearInterval(interval);
            }

            let BtoGSeat= document.getElementById('BtoGSeat');
            BtoGSeat.innerText=BtoG.length;

            let MtoGSeat= document.getElementById('MtoGSeat');
            MtoGSeat.innerText=MtoG.length;

            let PtoGSeat= document.getElementById('PtoGSeat');
            PtoGSeat.innerText=PtoG.length;

        },1000)

    });//promise end

    let res = await myPromise;
    console.log('res:',res)
    alert(res);
    console.log('BtoG',BtoG)
    console.log('MtoG',MtoG)
    console.log('PtoG',PtoG)

    localStorage.setItem('BtoG',JSON.stringify(BtoG));
    localStorage.setItem('MtoG',JSON.stringify(MtoG));
    localStorage.setItem('PtoG',JSON.stringify(PtoG));

    window.location='booking.html';

}//function end


function cancelTicket(){
let cancelling_speed1=  Math.ceil(Math.random()*5)
let cancelling_speed2=  Math.ceil(Math.random()*5)
let cancelling_speed3=  Math.ceil(Math.random()*5)

setTimeout(function(){
    BtoG.pop();
},(cancelling_speed1*1000));

setTimeout(function (){

    MtoG.pop();

},cancelling_speed2*1000);

setTimeout(function (){

    PtoG.pop();

},cancelling_speed3*1000);

    console.log(BtoG)
    console.log(MtoG)
    console.log(PtoG)


}
var interval=setInterval(cancelTicket,1000);


 