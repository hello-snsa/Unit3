function Register(e) {
    e.preventDefault();
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        username: document.getElementById('username').value,
        mobile: document.getElementById('mobile').value,
        description: document.getElementById('description').value
    }
    // console.log('formData: ', formData);
    formData = JSON.stringify(formData)
    fetch('http://masai-api-mocker.herokuapp.com/auth/register', {
        method:'POST',
        body: formData,
        // mode:'no-cors' //if cors eroore
        // additional information
        headers: {
            'Content-Type':'application/JSON'
        }
    }).then((resp) => {
        console.log('resp: ', resp);
        return resp.json()
        
    }).then((resp) => {
        console.log(resp)
    }).catch((error)=>{
        console.log('error: ', error);
        
    })
}


function Login(e) {
    e.preventDefault();
    let formData = {
        
        username: document.getElementById('susername').value,
        password: document.getElementById('spassword').value,
  
    }
    // console.log('formData: ', formData);
    let body = JSON.stringify(formData);
    fetch('http://masai-api-mocker.herokuapp.com/auth/login', {
        method:'POST',
        body: body,
        // mode:'no-cors' //if cors eroore
        // additional information
        headers: {
            'Content-Type': 'application/JSON'
        }
    }).then((resp) => {
        return resp.json()
    }).then((resp) => {
        // console.log('resp: ', resp);
        getProfile(resp,formData)
    }).catch((error) => {
        console.log('error: ', error);
        
    })  
}


// 24d36f8981ba35f01151e0b6454bb07a



function getProfile({token},{username}) {
    fetch(`http://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((resp) => {
        return resp.json()
    }).then((resp) => {
        console.log('resp: ', resp);
        
    }).catch((error) => {
        console.log('error: ', error);
        
    })  
}