// let API_key= "4d09e6ea6ece2ebc51bba3eea2c5432c";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

get = () => {
    document.getElementById("par").style.display="none";
    document.getElementById("myimg").style.display="none";

    let weaher = async () => {
        try {
            let city = document.getElementById("inp").value;
            let cityname = document.getElementById("city");
            let disc = document.getElementById("disc");
            let temp = document.getElementById("temp");
            let humidity = document.getElementById("humidity");
            let windsp = document.getElementById("windsp");
            let pre = document.getElementById("pre");
            
            let myapi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d09e6ea6ece2ebc51bba3eea2c5432c&units=metric`) 
            console.log(myapi);
            let wait = await myapi;  
            console.log(wait);
            let json = await wait.json();
            console.log(json);


            if (wait.status == 404 || city=="") {
                cityname.innerHTML = "Enter valid city";
                disc.innerHTML = "Description: none";
                temp.innerHTML = "Temprature: 0&deg;c";
                humidity.innerHTML = "Humidity: 0%";
                windsp.innerHTML = "Wind Spead: 0km/h";
                pre.innerHTML = "Pressure : 0 mbar";

                vid.src=""
                icon.src="./balloons.svg"

            }
            else {
                cityname.innerHTML = city;
                disc.innerHTML = `Description : ${json.weather[0].description}`;
                temp.innerHTML =`Temprature : <i class="fa-solid fa-temperature-three-quarters"></i>${ Math.floor(json.main.temp)}&deg;c`;
                humidity.innerHTML = `Humidity :<i class="fa-solid fa-droplet"></i> ${json.main.humidity}%`;
                windsp.innerHTML = `Wind Spead :<i class="fa-solid fa-wind"></i> ${Math.floor(json.wind.speed)}km/h`;
                pre.innerHTML = `Pressure : ${json.main.pressure} mbar`;

                let vid=document.getElementById("vid");
                let icon=document.getElementById("icon")
                if(json.weather[0].main=="Clear"){
                    vid.src="./clear.mp4";
                    icon.src="./clear.svg";
                }
                else if(json.weather[0].main=="Rain"){
                    vid.src="./rain.mp4";
                    icon.src="./rain-umb.svg";
                }
                else if(json.weather[0].main=="Clouds"){
                    vid.src="./cloud (2).mp4";
                    icon.src="./cloud.svg";
                }
                else if(json.weather[0].main=="Drizzle"){
                    vid.src="./haze.mp4";
                    icon.src="./rain.svg";
                }
                else if(json.weather[0].main=="Mist"){
                    vid.src="./mist.mp4";
                    icon.src="./cloud.svg";
                }
                else if(json.weather[0].main=="Haze"){
                    vid.src="./haze.mp4";
                    icon.src="./haze.svg";
                }
                else{
                    vid.src=""
                    icon.src="./balloons.svg"
                }

            }
            document.getElementById("inp").value = "";

        }
        catch(err){
            console.log(err);
            document.getElementById("city").innerHTML="no internet"
            
        }
    }
    weaher();
}


