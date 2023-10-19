import React from "react";

const ShowData = ({ weather }) => {
  return (
    <div className="card">
    {weather ? (
             <div className="card bg-[#121212] text-white w-[220px] h-[350px] flex flex-col justify-center items-center ml-[35rem] mt-5">
               <h4 className="text-2xl">{weather.name}</h4>
               <img
                 src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                 alt=""
                 className="w-[150px]"
               />
     
               <p>Temperature: {weather.main.temp}°C</p>
               <p>Description: {weather.weather[0].description}</p>
               <p>Feel like: {weather.main.feels_like}°C</p>
               <p>Humidity: {weather.main.humidity}%</p>
               <p>Pressure:{weather.main.pressure}</p>
               <p>Wind Speed: {weather.main.speed}M/s</p>
             </div>
           ) : (
             <p>Loading Weather data...</p>
           )}
      
    </div>
  );
};

export default ShowData;
