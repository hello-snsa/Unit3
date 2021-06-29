let queue = ['abhishek', 'pulkit', 'chandan','manish', 'Debashish', 'sonam'];

function register() {
    // localStorage.setItem('queue',JSON.stringify(queue));

    let name = document.getElementById('name').value;
    queue.push(name);
    let message = `${name} Your registration is succesfull. Please wait for your turn.`;

    alert(message);

    let promise = new Promise(function (resolve, reject) {

        setInterval(function (){
        
        if (queue[0] == name) {

            resolve(`${name} its your turn now.`)
            clearInterval(interval);
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

queue.shift()
console.log('queue: ',queue);

}
let interval= setInterval(startVaccination,2000)