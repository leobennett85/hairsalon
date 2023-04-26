import './Dazzle.css';
import { motion } from "framer-motion";

const Dazzle = () => {
  const { x, y } ='';
    return (
    <>
    <motion.div 
      className="fleck"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }} />
    </>
    );
  };

  export default Dazzle;