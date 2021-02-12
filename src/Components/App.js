import { StrictMode, useState } from 'react';
import CityInput from './CityInput/index'
import CityWeather from './CityWeather/index'
const App = ()=>{
    let [city,setcity] = useState("");
    let [cityWeather,setcityweather] = useState("");
    const fetchcityweather = ()=>{
        let promise = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`);
        promise.then(res => {
            let xy = res.json();
            xy.then(res=>{
                if(res.cod == 200){
                    setcityweather(res);
                }
            }).catch(rej=>{
                console.log("error in json",rej);
            })
        }).catch(err => {
            console.log("some error ",err);
        })
    }
    return(
    <StrictMode>
        <CityInput fetchcityweather={fetchcityweather} city={city} setcity={setcity}></CityInput>
        <CityWeather weatherinfo={cityWeather}></CityWeather>
    </StrictMode>)
    
}
export default App;