import "./SplashLogo.css";
import Logo from "../../images/logo.svg";
import SimpleLogo from "../../images/simplelogo.svg";
import Dazzle from "../Dazzle/Dazzle";
import { motion } from "framer-motion";

const SplashLogo = () => {
    return (
        <>
        <motion.img
                className="logo"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 6,
                  delay: 0.5,
                  ease: [0.25, 0.50, 0.75, 1]
                }}
            src={Logo} />
        <motion.img
                className="logo"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1 }}
                transition={{
                  duration: 6,
                  delay: 0.5,
                  ease: [0.25, 0.50, 0.75, 1]
                }}
            src={SimpleLogo} />
        </>
    );
};

export default SplashLogo;