import React,{useState,useEffect} from 'react'

function Weatherfetch() {
    const [city, setCity] = useState()
    const [input, setInput] = useState('mumbai')
    const [clouds, setClouds] = useState()
    useEffect(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=fc42849134f821fc21e4950fc9931cdc`
        )
          .then((response) => response.json())
          .then((json) => {
            return (setCity(json.main),
            console.log(json),
            setClouds(json.clouds.all));
          });
      }, [input]);
    
  return (
   <>
    <div className="content App">
        <div className="location app margin-right padding margin">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="City Name"
          />{" "}
        
        </div>
        {!city ? (
          <p className="app" style={{color:"white"}}>No city found</p>
        ) : (
          <>
            <div className="info app">
              <h1
                className="uppercase"
                style={{ color: "yellow", fontSize: "4rem" }}>{input}
              </h1>
            </div>
            <div className="clouds">{clouds>45? <i class="fas fa-cloud"></i>: <i class="fa-solid fa-sun"></i> }</div>
            <h2 className="app h2 ">{city.temp} °C</h2>
            <div className="img app">
              <p className="color">
                Min Temp:{city.temp_min}°C || Max Temp: {city.temp_max}°C
              </p>
            </div>
          </>
        )}
      </div>
   </>
  )
}

export default Weatherfetch