import { Card, Descriptions } from "antd"

const ForecastItem = ({day, temperature, wind}) => {
    return (
        <Card
            title={`Day ${day}`}
            style={{width: 200}}>
                <Descriptions>
                    <Descriptions.Item span={3} label="Temperature">{temperature}</Descriptions.Item>
                    <Descriptions.Item span={3} label="Wind">{wind}</Descriptions.Item>
                </Descriptions>
        </Card>
    )
}

export default ForecastItem;