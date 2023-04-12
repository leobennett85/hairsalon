import "./Splash.css";
import Logo from "../images/logo.svg";
import SimpleLogo from "../images/SimpleLogo.svg";


const Splash = () => {
    return (
        <>
            <div id="mainlogo">
                
            <img className="logosimple" src={SimpleLogo} />
            <img className="logomain" src={Logo} />
                
            </div>
        </>
    )
}

export default Splash;