import { useEffect, useState } from 'react';
import { getCoordinates } from './services/getCoordinates';
import { getCurrentWeather } from './services/getCurrentWeather';
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true)
  useEffect(() => {  
    const loadWeather = async () =>  {
      const coordinates = await getCoordinates();
      if(coordinates) {
        const weatherData = await getCurrentWeather(coordinates.latitude, coordinates.longitude);
        setWeather(weatherData); 
      } else {
        //
      }
    }  
    loadWeather()
  }, []);
  return (
    <section className='section_app'>
        <header className='header_app'>
          <h1>Weather App</h1>
        </header>
        <body className='body_container'>                 
          {weather ? (
            <>            
              <section className='data_container'>
                <div className='div_icon'>
                  <p>{isCelsius ? weather.temperature.celsius.toFixed(0) : weather.temperature.farenheit.toFixed(0)}°{isCelsius ? "C" : "F"}
                  </p>
                  <img src={weather.weather.icon} alt={weather.weather.description} />
                </div>    
                <div className='div_weather'>
                  <h2>{weather.weather.main}</h2>
                </div>
                <div className='country_description'>
                  <p>{weather.city}, {weather.country}</p>
                  <p>{weather.weather.description}</p>               
                </div>                                
              </section>              
              <button className='button' onClick={()=>setIsCelsius(!isCelsius)}>Change °{isCelsius ? "F" : "C"}</button>
            </>            
          ) : <p>Loading weather...</p>}               
        </body>
    </section>
  )
}

export default App
