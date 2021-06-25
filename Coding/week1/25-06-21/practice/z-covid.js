var queue=['abhishek','pulkit','chandan','manish','Deb','sonam'];
var newUser;


function startInterval(){

    var interval=  setInterval(startVaccination ,2000); 

    if(queue.length==0)
    {
        clearInterval(interval)
    }

    return interval;

}

function register(){

     newUser = document.getElementById('name').value;
    queue.push(newUser);

    let message=`Hello Mr. ${newUser} ! Your registration is Successful. Please wait for your turn.`

    // alert(message);
    console.log(message);

    startInterval();
}

function startVaccination(){

let stopInterval=startInterval();
// let stopIt=stopInterval.interval;
    if(queue.length==0)
    {
        clearInterval(stopInterval);
    }


var myPromise= new Promise(function (resolve,reject){

    alert(queue[0] +" Its you turn");
   
    queue.shift();
    console.log('queue: ',queue);
    
    if(queue[0]==newUser)
    {
        resolve(` Hey ${newUser} ! Its your turn Now.`); 
        // clearInterval(interval);
        
    }
   

});

myPromise.then(function (res){
    console.log(res);
    alert(res)
    // console.log("from then")
})
.catch(function (err){
// alert(err);
console.log("err: ",err)
})

}





