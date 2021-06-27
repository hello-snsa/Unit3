console.log("Script 1.covid-vaccination-counter.html is working.");

//pre- data
var patient=['ali','snsa','babul','priyanka','sushil'];
var newUser;
// var interval;



function register()
{ 
    newUser= document.getElementById('name').value;
    // console.log(newUser);
    patient.push(newUser);
    // vaccinationCompleted();

    //wait for your turn

    //promise

    var myPromise= new Promise(function (resolve,reject){

        setInterval(function (){
        if(patient[0]==newUser)
        {
            resolve(`Hey !!! Mr. ${newUser} !!! Its your turn Now...`);

        }
    },1000);

    })

    myPromise.then(function(res){

        console.log("result: ",res);
        alert(res);
        clearInterval(interval);




    })
    .catch(function (err){
        console.log("Error: ",err);
        alert(err);
        clearInterval(interval);

    });


}


function vaccinationCompleted(){
// interval= setInterval(vaccinationCompleted,2000);
// for(x in patient)
// {
//     // alert(`Hey Mr. ${patient[x]} !!! Its your turn Now...`)
//     console.log(`Hey Mr. ${patient[x]} !!! Its your turn Now...`)
//  patient.shift();
// }
console.log("patients:",patient)
patient.shift();
}
var interval= setInterval(vaccinationCompleted,1000);


