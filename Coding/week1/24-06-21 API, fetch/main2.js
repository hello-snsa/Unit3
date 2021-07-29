// a5000c74f0241ce5e4ddc4481b7fd071
// api.openweathermap.org/data/2.5/weather?q=London&appid={a5000c74f0241ce5e4ddc4481b7fd071}

let container = document.getElementById('container');
let count = 0;


async function getWeatherData() {
    count = 1;

    var city = document.getElementById('cityName').value;

    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5000c74f0241ce5e4ddc4481b7fd071`);

        let data = await res.json();
        console.log('data:', data)

        showWeatherData(data);
    } catch (e) {
        console.log("e: ", e);
    }

}



function showWeatherData(d) {
    container.innerHTML = "";
    try {
        let name = document.createElement('p');
        name.innerText = `name - ${d.name}`;


        let temp = document.createElement('p');
        temp.innerHTML = `Temp - ${Math.round(d.main.temp) - 273} C `;

        let humidity = document.createElement('p');
        humidity.innerText = `humidity - ${d.main.humidity}`;

        let pressure = document.createElement('p');
        pressure.innerText = `pressure - ${d.main.pressure}`;


        container.append(name, temp, humidity, pressure);

    }
    catch (e) {
        if (count == 1)
            container.innerHTML = "City name is not Correct";
    }

}
// getWeatherData();