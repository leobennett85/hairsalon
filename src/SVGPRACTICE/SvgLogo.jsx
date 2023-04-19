import "./SvgLogo.css";
import Logo from "./SvgLogo.svg";


const SvgLogo = () => {
    return (
        <>
            <img className="logo" src={Logo} />
        </>
    )
}

export default SvgLogo;