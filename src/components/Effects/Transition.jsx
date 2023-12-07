import { motion } from "framer-motion";
import "./style/Transition.css";
import { useSelector } from "react-redux";

const Transition = (Component) => {
  return () => {
    const imageLoaded = useSelector((state) => state.imageLoading);

    return (
      <>
        <Component />

        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: imageLoaded ? 0 : 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
};

export default Transition;
