import "./Splash.css";
import Logo from "../../images/Logo.svg";
import SimpleLogo from "../../images/SimpleLogo.svg";


const Splash = () => {
    return (
        <>
            <div id="mainlogo">
                <img className="logosimple" src={SimpleLogo} />
                <img className="logomain" src={Logo} />
            </div>
            <div id="introcredentials" className="introbegin animatecredentials">
                Malinda McDonald - Master Colorist and Stylist
            </div>
            <div id="introhook1" className="animatehook1">
                Bring out your color and style
            </div>
            <div id="introhook2" className="animatehook2">
                Because when you look good, you feel good
            </div>
        </>
    )
}

export default Splash;