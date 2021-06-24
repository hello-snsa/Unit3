//http://www.omdbapi.com/?i=tt3896198&apikey=c0da8be4

// let products_data = [];
let container= document.getElementById('container');
var apiKey="c0da8be4";

async function getMovieData(){

    var movieName = document.getElementById('movieName').value;
    
    try{
    let res = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);

   let data= await res.json();
    console.log('data:',data)

    showMovieData(data);
} catch(e){
    console.log("e: ",e);
    }

    }



function showMovieData(d){
    let name=document.createElement('p');
    name.innerText=`Title - ${d.Title}`;


    let year=document.createElement('p');
    year.innerHTML=`year - ${d.Year}`;

    let imdbRating=document.createElement('p');
    imdbRating.innerText=`imdbRating - ${d.imdbRating}`;

    let releasedDate=document.createElement('p');
    releasedDate.innerText=`releasedDate - ${d.Released}`;

    
    container.append(name,year,imdbRating,releasedDate);

}
// getMovieData();