import { Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const TryItOut = () => {
    const navigate = useNavigate()
    const onSearch = (value) => {
        navigate(`/weather/${value}`)
    }
    
    return (
        <>
            <Typography.Title level={3}>Try it out</Typography.Title>
            <Input.Search style={{width: 350}} placeholder="Input city name" onSearch={onSearch} enterButton />
        </>
    )
}

export default TryItOut;