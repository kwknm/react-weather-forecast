import { Result, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CityFullInfo from "../Components/CityFullInfo";
import ApiService from "../Services/ApiService";

const Weather = () => {
    const {city} = useParams();
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const res = await ApiService.getWeatherForCity(city)
        setData(res);
    }
    
    useEffect(() => {
        if (data === null) 
        fetchData();
    }, [data])
    
    if (data === null) {
        return <div className="centered"><Spin/></div>
    }
    
    if (data?.temperature === "") {
        return <Result status="error"
            title="Weather Forecast for this city not found."/>
    }
    
    return (
        <CityFullInfo 
            city={data.city}
            description={data.description}
            forecast={data.forecast}
            temperature={data.temperature}
            wind={data.wind}/>
    )
}

export default Weather;