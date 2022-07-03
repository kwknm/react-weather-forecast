import HeroSection from "../Components/HeroSection";
import TryItOut from "../Components/TryItOut";

const Home = () => {
    return (
        <>
            <HeroSection/>
            <div style={{marginTop:"2rem", display:"flex", alignItems:"center", flexDirection:"column"}}>
                <TryItOut/>
            </div>
        </>
    )
}

export default Home;