import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./style/ScrolleableSection.css";
import { isMobile } from "react-device-detect";

const ScrolleableSecction = ({ items, links }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [ProjectsPreview, setProjectsPreview] = useState(false);

  const intervalRef = useRef(null);
  const { pathname } = useLocation();

  const isPathHome = pathname === "/";
  const isPathProjects = pathname === "/projects";

  const getElementsPerPage = () => {
    if (pathname === "/") {
      if (width < 500) return 1;
      if (width < 740) return 2;
      return 3;
    }
    if (pathname === "/projects") return 1;
  };

  const elementsPerPage = getElementsPerPage();

  const getMaxIndex = () => items.length - elementsPerPage;

  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : getMaxIndex()
    );
    resetInterval();
  };

  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < getMaxIndex() ? prevIndex + 1 : 0
    );
    resetInterval();
  };

  const autoScroll = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < getMaxIndex() ? prevIndex + 1 : 0
    );
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(
      autoScroll,
      isPathHome ? 3000 : isPathProjects && 6000
    );
  };

  const changeIndex = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  const showInfoProyect = () => {
    setProjectsPreview(!ProjectsPreview);
  };

  useEffect(() => {
    if (ProjectsPreview === false) {
      intervalRef.current = setInterval(
        autoScroll,
        isPathHome ? 3000 : isPathProjects && 6000
      );

      return () => clearInterval(intervalRef.current);
    }
  }, [elementsPerPage, items.length, ProjectsPreview]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  useEffect(() => {
    addEventListener("resize", changeWidth);

    return () => {
      removeEventListener("resize", changeWidth);
    };
  }, []);
  const styleProjectsPath = {
    width: `${width}px`,
    maxWidth: "1800px",
    height: "100%",
  };

  return (
    <>
      <div
        className={`container--scroll ${
          (isPathHome && "scroll__home") ||
          (isPathProjects &&
            `scroll__projects ${isMobile ? "" : "fade-transition"} `)
        }`}
      >
        {" "}
        <div
          className={`flex relative ${
            (isPathHome && "scroll--items__home") ||
            (isPathProjects && "scroll--items__projects max-h-[500px] ")
          }`}
          onClick={isPathProjects ? showInfoProyect : undefined}
          style={{
            transition: "transform 0.3s ease",
            transform: `translateX(-${
              currentIndex * (100 / elementsPerPage)
            }%)`,
          }}
        >
          {items.map((item, index) => (
            <article
              key={index}
              className={`${
                (isPathHome &&
                  "container--item__home translate--item__home ") ||
                (isPathProjects && "container--item__projects")
              }`}
            >
              <div
                className={`${
                  isPathHome
                    ? `item--home ${isMobile ? "" : "fade-transition"}`
                    : "item--project"
                }`}
                style={isPathProjects ? styleProjectsPath : undefined}
              >
                {isPathHome ? item : item}
              </div>
            </article>
          ))}
        </div>
        <button
          aria-label="scroll left"
          className="left-5 scroll--btn rounded-r-full"
          onClick={handleScrollLeft}
        >
          <i className="bx bx-chevron-left"></i>
        </button>
        <button
          aria-label="scroll right"
          className="-right-6 scroll--btn rounded-l-full"
          onClick={handleScrollRight}
        >
          <i className="bx bx-chevron-right"></i>
        </button>
        <div className="z-10 gap-[3px] flex items-center justify-center opacity-60 h-[10%] bottom-0 left-0 right-0 absolute">
          {Array.from({ length: getMaxIndex() + 1 }, (_, i) => (
            <button
              key={i}
              id={i}
              aria-label="view index"
              className={`z-10 ease-in duration-200 transition-all hover:scale-105 rounded-full border h-[11px] w-[12px] border-black opacity-70 ${
                currentIndex === i ? "bg-slate-200" : "bg-slate-600"
              }`}
              onClick={() => changeIndex(i)}
            ></button>
          ))}
        </div>
      </div>

      {isPathProjects ? (
        <article
          className={`fixed flex justify-center items-center top-0 z-40 w-[100%] h-[100%] bg-[#00000065] ${
            ProjectsPreview ? "visible" : "hidden"
          }`}
        >
          <div className="relative w-[90%] h-[90%]">
            {ProjectsPreview ? (
              <iframe
                src={links[currentIndex]}
                className="w-[100%] h-[100%] bg-white rounded-2xl"
                aria-label="projects preview"
              ></iframe>
            ) : undefined}

            <button
              className={`absolute top-2 right-2 z-50 w-10 h-6 text-indigo-800 hover:text-red-800 text-4xl ${
                ProjectsPreview ? "visible" : "hidden"
              }`}
              onClick={showInfoProyect}
              aria-label="close preview project"
            >
              <i className="bx bxs-x-circle"></i>
            </button>
          </div>
        </article>
      ) : undefined}
    </>
  );
};

export default ScrolleableSecction;
