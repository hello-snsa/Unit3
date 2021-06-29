
var newUser;
// console.log('newUser')

let isBooked=0;
var BtoG=JSON.parse(localStorage.getItem('BtoG'))
var MtoG=JSON.parse(localStorage.getItem('MtoG'));
var PtoG=JSON.parse(localStorage.getItem('PtoG'));


function bookingTicket(){
    newUser= document.getElementById('pName').value;
    console.log("new user name: ",newUser)

    let booking_speed1=  JSON.parse(localStorage.getItem('BtoG')).length;
    console.log(booking_speed1);

    let booking_speed2=  JSON.parse(localStorage.getItem('MtoG')).length;
    console.log(booking_speed2);

    let booking_speed3=  JSON.parse(localStorage.getItem('PtoG')).length;
    console.log(booking_speed3);

try{
if(booking_speed1<booking_speed2 && booking_speed1<booking_speed3)
{
    BtoG.push(newUser);
}
else if( booking_speed2<booking_speed3)
{
    MtoG.push(newUser);
}
else {
    PtoG.push(newUser);
}

}
catch(e){
    console.log(e)

}
console.log(BtoG)
        console.log(MtoG)
        console.log(PtoG)
    
    
    }