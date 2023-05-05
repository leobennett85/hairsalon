import "./Splash.css";
import Nameswipe from "../../components/Nameswipe/Nameswipe";
import SplashLogo from "../../components/SplashLogo/SplashLogo";


const Splash = () => {

    return (
        <>
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