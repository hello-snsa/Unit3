console.log("Script main.js is working.")

function Register(e){
    e.preventDefault();
    let formdata={
        
        name: document.getElementById('inp1').value,
        email: document.getElementById('inp2').value,
        password: document.getElementById('inp3').value,
        username: document.getElementById('inp4').value,
        mobile: document.getElementById('inp5').value,
        description: document.getElementById('inp6').value
        
    };
    // console.log('formdata:',formdata);
    formdata = JSON.stringify(formdata);

    fetch ('https://masai-api-mocker.herokuapp.com/auth/register',
    {
        method: 'POST',
        body: formdata,
        //mode:'no-cars',

        //additional information your request

        headers:{
        'Content-Type':'application/json',

        },
})
.then((response) => {
    return response.json()
}).then((response) => {
    console.log('response: ',response)

}).catch((err) => {
    console.log('err:',err)

})
}

function Login(e){
    e.preventDefault()

    let formdata={
        username:document.getElementById("inp7").value,
        password:document.getElementById("inp8").value,
    };
    formdata= JSON.stringify(formdata);
    
    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{

        method: 'POST',
        body: formdata,
        

        //additional information your request
        headers:{
        'Content-Type':'application/json',
        },

    }).then((response) => {

        return response.json()
    }).then((response) => {
        console.log('response: ',response)
    
    }).catch((err) => {
        console.log('err:',err)
    
    })

    // fetch(input: RequestInfo, init?: RequestInit): Promise<Response>

    // })
}

function getmyProfile(){

fetch(`https://masai-api-mocker.herokuapp.com/user/${u}`,{

headers:{
    
}

})

}


//token: 4c9d33298e7898812521300c21bd7349