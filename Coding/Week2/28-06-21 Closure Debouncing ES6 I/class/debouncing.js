console.log("script debouncing.js is working")

let movies_div = document.getElementById('movies')

async function searchMovies() {
    let name = document.getElementById('query').value;

    let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=d806bd70`);

    let data = await response.json();
    // console.log('data: ',data)

    return data;

}
     
function appendMovies(movies) {

    movies_div.innerText=null;
    // movies.forEach((el) => {
    movies.forEach(({Title}) => {
        let p = document.createElement('p');
        // p.innerText = el.Title;
        p.innerText = Title;

        movies_div.append(p);


    })

}

async function main(){

    // let data= await  searchMovies();
    // appendMovies(data.Search);

    let {Search}= await  searchMovies();
    appendMovies(Search);

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

    //a main(),2000
    //b main(),2000

