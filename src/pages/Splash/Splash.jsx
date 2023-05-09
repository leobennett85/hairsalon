import "./Splash.css";
import Nameswipe from "../../components/Nameswipe/Nameswipe";
import SplashLogo from "../../components/SplashLogo/SplashLogo";
import { useNavigate } from "react-router-dom";

const Splash = () => {
    const navigate = useNavigate();
    return (
        <>
        <a href="" onClick={()=>navigate("/Home")} className="text-navbar">Home</a>
        <div id="introContainer">
            <div id="splashLogoContainer">
                <SplashLogo />
            </div>
            <div id="nameSwipeContainer">
                <Nameswipe />
            </div>
        </div>
        </>
    )
}

export default Splash;