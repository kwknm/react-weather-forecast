import { Menu } from "antd";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Menu mode="horizontal" style={{marginBottom: '2rem'}}>
                <Menu.Item key="wf">
                    <Link to='/'>Weather Forecast</Link>
                </Menu.Item>
        </Menu>
    )
}

export default NavBar;