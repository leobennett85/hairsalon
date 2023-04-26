import "./SplashLogo.css";
import Logo from "../../images/logo.svg";
import SimpleLogo from "../../images/simplelogo.svg";
import Dazzle from "../Dazzle/Dazzle";
import { motion } from "framer-motion";

const SplashLogo = () => {
    return (
        <>
        <Dazzle />
        <motion.img
            animate={{
                x: '100vh'
            }}
            src={Logo} />
        <img src={SimpleLogo} />
        </>
    );
};

export default SplashLogo;