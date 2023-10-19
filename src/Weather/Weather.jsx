import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import ShowData from "../ShowData/ShowData";

const Weather = () => {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState();

  const Defult = "34480b98aa332da53123a0ac63a4ea9d";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Defult}`
      );

      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Passing an empty array as the second argument ensures that this effect runs once after the initial render.

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="main">
    <div>
      <h1 className=" text-[34px]">Search Weather</h1>
    </div>
    <form
      className="flex  justify-center items-center"
      onSubmit={handleSubmit}
    >
      <label for="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative  ">
        <input
          value={city}
          onChange={handleInputChange}
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        ></button>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 mr-30 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg
          className="w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        Search
      </button>
    </form>
    <ShowData weather={weather} />
    </div>
  );
};

export default Weather;
