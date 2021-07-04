console.log("script starwar.js is working. ")

var query="";
var parentDiv= document.getElementById('printHere');

async function getData(){
    parentDiv.innerHTML=null;
try{
    let belowDiv=document.getElementById('below');
    belowDiv.setAttribute('id',"belowDivs")
}catch(e){
    console.log("ok")
}

query=document.getElementById("searchIt").value;
// if(query.length>=1){
console.log(query);
    var res= await fetch(`https://swapi.dev/api/people/?search=${query}`);

var data= await res.json();
    
    // console.log("data",data);
  
return(data);
    // setData({results,gender,birth_year});
    //name
    //gender birth_year
// }
// else{
//     parentDiv.innerHTML=null;

// }

}
function setData(data)
{
    parentDiv.innerHTML=null;
    console.log("name:",data.results[0].name);

   

    for(i in data.results)
    {
        
    let myDiv=document.createElement('div');
    myDiv.setAttribute("class","resultDiv");

    let name = document.createElement('p');
    name.innerText=data.results[i].name;
    name.setAttribute("class","name");

    let gender = document.createElement('p');
    gender.innerText=data.results[i].gender;
    gender.setAttribute("class","gender");

    let year = document.createElement('p');
    year.innerText=data.results[i].year;
    year.setAttribute("class","year");
   
   
    myDiv.append(name,gender,year)
    
    parentDiv.append(myDiv);
    
    
    
}
}

async function main(){

    // let data= await  searchMovies();
    // appendMovies(data.Search);

    let search= await  getData();
    console.log("query len",query.length)
    if(query.length<=0){
        parentDiv.innerHTML=null;
    }
    else{
    setData(search);
    }
}

var timer_id;//undefined
function throttleFunction(func,delay){
   
//If setTimeout is already there, no need to do anything.

//a

    if(timer_id){
        return false;
    }
        
    timer_id = setTimeout(()=>{ 
            
        func(); //calling main() function

        timer_id = undefined;

        },delay);

    }