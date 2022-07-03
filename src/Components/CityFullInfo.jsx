import { Statistic, Typography } from "antd";
import ForecastItem from "./ForecastItem";

const CityFullInfo = ({city, temperature, wind, description, forecast}) => {
    return (
        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <Typography.Title>Weather Forecast for {city}</Typography.Title>
            <div className="stats">
                <Statistic title="Temperature" value={temperature}/>
                <Statistic title="Wind" value={wind}/>
                <Statistic title="Description" value={description}/>
            </div>
            <Typography.Title level={3}>Weather forecast for the coming days:</Typography.Title>
            
            <div className="forecastItems">
                {forecast.map(fc => {
                    return <ForecastItem 
                        key={fc.day}
                        day={fc.day}
                        temperature={fc.temperature}
                        wind={fc.wind}/>
                })}
            </div>
        </div>
    )
}

export default CityFullInfo;