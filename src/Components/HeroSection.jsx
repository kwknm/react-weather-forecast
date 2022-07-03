import { Typography } from "antd";
import { useEffect, useState } from "react";
import { CITIES_TO_DISPLAY } from "../constants";
import ApiService from "../Services/ApiService";
import CityInfoCard from "./CityInfoCard";

const HeroSection = () => {
    const [infos, setInfos] = useState([]);
    const fetchInfos = async () => {
        const data = await Promise.all(CITIES_TO_DISPLAY.map(city => {
            return ApiService.getWeatherForCity(city)
        }))

        setInfos(data);
    }
    
    useEffect(() => {
        if (infos.length === 0) {
            fetchInfos();
        }
    }, [infos.length])

    return (
        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <Typography.Title>Weather Forecast for every city!</Typography.Title>
            <Typography.Title level={3}>Here is a few cities:</Typography.Title>
                
            <div className="cities">
                {infos.map(data => {
                    return <CityInfoCard
                        key={data.city}
                        city={data.city}
                        temperature={data.temperature}
                        wind={data.wind}
                        description={data.description}/>
                })}
            </div>
        </div>
    )
}

export default HeroSection;