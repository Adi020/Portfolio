import "./style/StarsAnimation.css";
import { useLocation } from "react-router-dom";

const iconsByPath = (
  <>
    <span className="animations-2 z-10 animation-2 text-blue-500 text-6xl transition ease-in-out duration-200">
      <i className="bx bxl-react absolute"></i>
    </span>
    <span className="animations-2 z-10 animation-3 text-cyan-700 opacity-100 text-6xl transition ease-in duration-400">
      <i className="bx bxl-tailwind-css absolute"></i>
    </span>
    <span className="animations-2 z-10 animation-6 text-yellow-700 opacity-100 text-6xl transition ease-in-out duration-200">
      <i className="bx bxl-javascript absolute"></i>
    </span>
    <span className="animations-2 z-10 animation-7 text-green-700 opacity-100 text-6xl transition ease-in duration-400">
      <i className="bx bxl-nodejs absolute"></i>
    </span>
    <span className="animations-2 z-10 animation-9 text-cyan-700 opacity-100 text-6xl transition ease-in duration-400">
      <i className="bx bxl-css3 absolute"></i>
    </span>
    <span className="animations-2 z-10 animation-10 text-gray-400 opacity-100 text-6xl transition ease-in duration-400">
      <i className="bx bxl-github absolute"></i>
    </span>
  </>
);

const starsDefault = (
  <>
    <span className="animations-1 z-10 animation-1"></span>
    <span className="animations-1 z-10 animation-2"></span>
    <span className="animations-1 z-10 animation-3"></span>
    <span className="animations-1 z-10 animation-4"></span>
    <span className="animations-1 z-10 animation-5"></span>
    <span className="animations-1 z-10 animation-6"></span>
    <span className="animations-1 z-10 animation-7"></span>
    <span className="animations-1 z-10 animation-8"></span>
    <span className="animations-1 z-10 animation-9"></span>
    <span className="animations-1 z-10 animation-10"></span>
  </>
);

const StarsAnimationn = () => {
  const location = useLocation();

  return <>{location.pathname === "/about" ? iconsByPath : starsDefault}</>;
};

export default StarsAnimationn;
