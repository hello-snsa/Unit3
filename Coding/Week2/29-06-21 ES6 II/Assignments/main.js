let loginDiv=document.getElementById("loginDiv");
console.log("please wait api is SLOW")
let homeDiv= document.getElementById('homeDiv');
homeDiv.style.visibility="hidden";
// homeDiv.style.visibility="visible";

let paginationDiv=document.getElementById('paginationDiv');
paginationDiv.style.visibility="hidden";

let query;
let key="6853b64b9047eac94960aeee156b941c"


async function fetchIt(){

    
query=document.getElementById('searchBar').value;

    console.log("google data ",)
    let res= await fetch(`http://api.serpstack.com/search?access_key=${key}&query=${query}`);

    let data= await res.json();
    console.log(data);
    printIt(data)
    


}

async function printIt(data)
{
    total_result=data.search_information.total_results
time_taken=data.search_information.time_taken_displayed;
let search_information=document.getElementById('search_information');
search_information.innerText=`About ${total_result} results (${time_taken} seconds)`;
    // printdata


    let organic_results= document.getElementById('organic_results');
    organic_results.innerText="";


    let result=document.createElement('div');
    let res=data.organic_results.length;
    for(let i=0;i<res;i++)
    {
    let  url=document.createElement('p');
    url.innerText=data.organic_results[i].url;
    console.log("url",url)
    let title=document.createElement('h2');
     title.innerText=data.organic_results[i].title;
    let snippet=document.createElement('p');
     snippet.innerText=data.organic_results[i].snippet;
    
    result.append(url,title,snippet);
    }
    organic_results.append(result);
    
//    

   let knowledgeDivHeader= document.getElementById('knowledgeDivHeader');

//    knowledgeDivHeader.innerHTML=data.knowledge_graph.title;

paginationDiv.style.visibility="visible";


}




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
        // mode:'no-cors', //if cors eroore
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

        console.log("redirecting to main page...");
     
        let loginDiv=document.getElementById("loginDiv");
        loginDiv.innerHTML="";
        console.log("before login div")
        loginDiv.style.visibility="hidden";
        console.log("after login div")

        homeDiv.style.visibility="visible";
        // window.location.href="./home.html";
        fetchIt();

        
        
    }).catch((error) => {
        console.log('error: ', error);
        
    })  


}


//6853b64b9047eac94960aeee156b941c
