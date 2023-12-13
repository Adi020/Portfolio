import { Link, NavLink } from "react-router-dom";
import "./style/header.css";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

const Header = () => {
  const [changeShowModal, setChangeShowModal] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

  const scrollToTopWithAnimation = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  const hideAndShowModal = () => {
    setChangeShowModal(!changeShowModal);
  };

  const handleSize = () => {
    setIsDesktop(window.innerWidth > 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleHiddenModalBySize = () => {
    if (isDesktop) {
      if (changeShowModal === false) {
        hideAndShowModal();
      }
    }
  };

  useEffect(() => {
    handleHiddenModalBySize();
  }, [isDesktop]);

  const closeMenuToScroll = () => {
    if (!changeShowModal) {
      hideAndShowModal();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeMenuToScroll);

    return () => {
      window.removeEventListener("scroll", closeMenuToScroll);
    };
  }, [changeShowModal]);

  const showAndHiddenBySize = isDesktop
    ? scrollToTopWithAnimation
    : () => {
        scrollToTopWithAnimation();
        hideAndShowModal();
      };
  return (
    <header className="fixed z-40 top-0 flex bg-black items-center min-h-[85px] max-[640px]:max-h-[85px] max-h-[110px] w-[100%] h-[100%] sm:h-[14%]">
      <div className="flex w-[100%]">
        <div
          onClick={scrollToTopWithAnimation}
          className="flex justify-center items-center ml-[5%]"
        >
          <Link aria-label="Home" to="/">
            <img
              className="h-[55px] max-[640px]:h-[45px] min-w-[43px] sm:min-w-[55px]"
              src="./Images/logo.svg"
              alt="svg"
            />
          </Link>
        </div>
        <nav className="flex w-full justify-center">
          <ol
            className={`max-w-[1500px] max-[640px]:fixed animation max-[640px]:w-[80%] max-[640px]:h-[70%] max-[640px]:rounded-l-3xl max-[640px]:top-[85px] max-[640px]:max-w-[73%] max-[640px]:bg-slate-900 
                        max-[640px]:px-[10%] transition-[right] duration-500 ease-in-out flex justify-between max-[640px]:flex-col max-[640px]:justify-evenly sm:w-[70%] 2xl:w-[60%] 
        ${changeShowModal || "right-[0]"}`}
          >
            <li className="list-none">
              <NavLink
                onClick={showAndHiddenBySize}
                className="nav--link"
                to="/"
              >
                <i className="bx bx-home nav--icon"></i>
                Home
              </NavLink>
            </li>

            <li className="list-none">
              <NavLink
                onClick={showAndHiddenBySize}
                className="nav--link"
                to="/about"
              >
                <i className="bx bxs-id-card nav--icon"></i>
                About me
              </NavLink>
            </li>

             <li className="list-none">
              <NavLink
                onClick={showAndHiddenBySize}
                className="nav--link"
                to="/projects"
              >
                <i className="bx bx-table nav--icon"></i>
                Projects
              </NavLink>
            </li>

            <li className="list-none">
              <NavLink
                onClick={showAndHiddenBySize}
                className="nav--link"
                to="/contact"
              >
                <i className="bx bxs-contact nav--icon"></i>
                Contact me
              </NavLink>
            </li>
          </ol>
        </nav>

        <button
          onClick={hideAndShowModal}
          aria-label="show nav items"
          className="flex text-yellow-50 absolute right-4 min-[640px]:hidden items-center hover:text-blue-200"
        >
          <i className="bx bx-menu-alt-right text-5xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
