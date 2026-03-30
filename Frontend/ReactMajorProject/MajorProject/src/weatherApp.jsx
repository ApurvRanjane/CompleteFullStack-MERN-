import SearchBox from "./searchbox"
import InfoBox from "./infoBox"
import React,{useState} from "react";
 
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
          city:"Pune",
        feelsLike: 25.58,
        temp: 25.27,
        tempMin: 25.27,
         tempMax: 25.29, 
          humidity: 66,
          weather:"haze",
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Apurv</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}