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
        //additional information your request

        headers:{
        'Content-Type':'application/json'

        }
})
.then((response) => {
    return response.json()
}).then((response) => {
    console.log('response: ',response)

}).catch
}
