// a5000c74f0241ce5e4ddc4481b7fd071
// api.openweathermap.org/data/2.5/weather?q=London&appid={a5000c74f0241ce5e4ddc4481b7fd071}


async function getWeatherData(){

    var city = document.getElementById('cityName').value;
    
    try{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5000c74f0241ce5e4ddc4481b7fd071`);

   let data= await res.json();
    console.log('data:',data)

    showWeatherData(data);
} catch(e){
    console.log("e",e);
    }

    }

getWeatherData();

function showWeatherData(d){

}