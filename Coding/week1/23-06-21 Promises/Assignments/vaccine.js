let queue = ['abhishek', 'pulkit', 'chandan','manish', 'Debashish', 'sonam','mani'];
var vaccine_counter = document.getElementById("vaccine_counter");
var patient_counter = document.getElementById("patient_counter");
var counter=10;
var pCount= queue.length;

var pAge;


function register() {
    // localStorage.setItem('queue',JSON.stringify(queue));
    pCount++;

    let name = document.getElementById('name').value;
    pAge=Number(document.getElementById("pAge").value);
    
    if(pAge>60)
    queue.unshift(name);
    else
    queue.push(name);

    console.log("queue ",queue)
   
    if(counter>=1)
   { var message = `${name} Your registration is succesfull. Please wait for your turn.`;}

    else{
    message= 'vaccine out of stock, Register tomorrow';

}
    alert(message);

    let promise = new Promise(function (resolve, reject) {

        setInterval(function (){
        
        if (queue[0] == name && counter>=1) {
            // counter++;
           
            console.log("counter",counter)
            resolve(`${name} its your turn now.`)

            // clearInterval(interval);
        }
        // else{
        //     reject('error')
        // }

    },1000)
});

    promise.then(function (res) {
        alert(res)
    })
        .catch(function (err) {
            console.log('err: ', err)
        })

}

//step-2: To consistently remove peoplw from the queue

function startVaccination(){
if(pCount==0 && counter>0)
{
    wait();
}

    if(pCount<=0)
    pCount=0;
   else
    pCount--;

    if(counter>0){
    queue.shift();
    counter--;
    vaccine_counter.innerHTML=counter;
    patient_counter.innerHTML=pCount;
    console.log('queue: ',queue);
}
else if(counter==0){
    queue.shift();
    // counter--;
   
    vaccine_counter.innerHTML=counter;
    patient_counter.innerHTML=pCount;
        alert("vaccine out of stock, visit tomorrow")
        console.log(queue)
        clearInterval(interval)
        return;
    }
    else{
        clearInterval(interval)
    }
   
}
let interval= setInterval(startVaccination,3000);

function wait(){
    
    if(pCount>0){
        return;
    }
    else{
        wait();
    }
}
