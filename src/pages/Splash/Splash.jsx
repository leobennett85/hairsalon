import "./Splash.css";
import Logo from "../../images/Logo.svg";
import SimpleLogo from "../../images/SimpleLogo.svg";
import { useNavigate } from "react-router-dom";


const Splash = () => {
    const navigate = useNavigate();

    return (
        <>
        {/*<a href="" onClick={()=>navigate("/Home")}>*/}
        <div id="introcontainer" onClick={()=>navigate("/")}>
            <img className="logosimple" src={SimpleLogo} />
            <img className="logomain" src={Logo} />
            <span className="introname">Malinda McDonald</span>
        </div>
        {/*</a>*/}
        </>
    )
}

export default Splash;