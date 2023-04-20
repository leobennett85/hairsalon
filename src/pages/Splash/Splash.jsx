import "./Splash.css";
import Logo from "../../images/Logo.svg";
import SimpleLogo from "../../images/SimpleLogo.svg";
import { useNavigate } from "react-router-dom";


const Splash = () => {
    const navigate = useNavigate();

    return (
        <>
        <a href="" onClick={()=>navigate("/Home")}>
        <div id="introcontainer" onClick={()=>navigate("/")}>
            <div id="mainlogo">
                <img className="logosimple" src={SimpleLogo} />
                <img className="logomain" src={Logo} />
            </div>
            {/*
            <div id="introcredentials" className="introbegin animatecredentials">
                Malinda McDonald - Master Colorist and Stylist
            </div>
            <div id="introhook1" className="animatehook1">
                Bring out your color and style
            </div>
            <div id="introhook2" className="animatehook2">
                Because when you look good, you feel good
            </div>
        */}
            </div>
            </a>
        </>
    )
}

export default Splash;