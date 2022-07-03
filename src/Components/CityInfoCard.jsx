import { Card, Descriptions, Statistic } from "antd"
import { Link } from "react-router-dom";

const CityInfoCard = ({city, temperature, wind, description}) => {
    return (
        <Card 
            title={city} 
            extra={<Link to={`/weather/${city}`}>details</Link>}
            style={{width: 300}}>
                <Descriptions >
                    <Descriptions.Item span={3} label="Temperature">{temperature}</Descriptions.Item>
                    <Descriptions.Item span={3} label="Wind">{wind}</Descriptions.Item>
                    <Descriptions.Item span={3} label="Desription">{description}</Descriptions.Item>
                </Descriptions>
        </Card>
    )
}

export default CityInfoCard;