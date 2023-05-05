import "./Nameswipe.css";
import NameSwipe from "../../images/name.svg";
import { motion } from "framer-motion";


const Nameswipe = () => {
return (
    <>
    <div id="nameSwipeContainer">
        <div id="nameSwipe">
        <motion.img
            className="nameSwipe"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 6,
                delay: 0.5,
                ease: [0.25, 0.50, 0.75, 1]
            }}
            src={NameSwipe} />
        </div>
    </div>
    </>
)
}

export default Nameswipe;