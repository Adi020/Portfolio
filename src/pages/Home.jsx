import transition from "../components/Effects/Transition";
import "./../pages/style/Home.css";
import ScrolleableSecction from "../components/Effects/ScrolleableSection";
import { handleCreateItem } from "../utils/createItem";
import { isMobile } from "react-device-detect";
import { useImageLoad } from "../hooks/useImageLoad";
import dataToScroll from "../db/home/dataToScroll.json";

const Home = () => {
  const { imgRef, handleImageLoad } = useImageLoad();
  const items = handleCreateItem(dataToScroll);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-[5%] max-[639px]:gap-[120px] min-[639px]:gap-[200px] w-[100%] text-white justify-center max-[639px]:pt-[110px] pt-[130px] pb-24 items-center">
        <section className="w-full max-w-[2000px] gap-14 flex justify-center flex-col items-center">
          <article
            className={`${
              isMobile ? "" : "fade-transition"
            } w-full max-[780px]:items-center max-[780px]:flex-col flex max-w-[2000px] justify-center mx-auto min-[780px]:flex-row-reverse max-[800px]:gap-[5%] min-[800px]:gap-[10%]`}
          >
            <article className="flex justify-center relative z-30 min-[780px]:min-w-[400px] max-[780px]:max-w-[500px]">
              <img
                ref={imgRef}
                onLoad={handleImageLoad}
                className="pt-6"
                src="./Images/decoration/Robot.webp"
                alt="image"
              />

              {/* movil */}
              <img
                className="min-[780px]:hidden absolute h-[11%] top-12 left-0"
                src="./Images/decoration/movil/Ellipse-movil.svg"
                alt="Svg"
              />
              <img
                className="min-[780px]:hidden absolute left-10 h-[5%]"
                src="./Images/decoration/movil/Ellipse-2-movil.svg"
                alt="Svg"
              />
              <img
                className="min-[780px]:hidden absolute right-7 h-[10%]"
                src="./Images/decoration/movil/Ellipse-3-movil.svg"
                alt="Svg"
              />

              {/* escritorio */}
              <img
                className="max-[780px]:hidden absolute h-[11%] top-16 left-0"
                src="./Images/decoration/Ellipse.svg"
                alt="Svg"
              />
              <img
                className="max-[780px]:hidden absolute left-16 h-[5%]"
                src="./Images/decoration/Ellipse2.png"
                alt="Svg"
              />
              <img
                className="max-[780px]:hidden absolute right-20 h-[10%]"
                src="./Images/decoration/Ellipse3.png"
                alt="Svg"
              />
            </article>
            <article className="z-10 flex flex-col justify-center items-start">
              <p className="sm:pb-3 max-[639px]:pb-4 font-FontTitle min-[3000px]:max-w-[600px] font-bold font__title">
                <span className="text-blue-600">Hi!</span> I’am a backend
                developed.
              </p>
              <p className="text-slate-300 max-w-[700px] min-[3000px]:max-w-[740px] font-WorkSans font-info text-shadow">
                I’m probably the most passionate developer you will ever get to
                work with. If you have a great project that needs some amazing
                skills, I’m your guy.
              </p>
            </article>
          </article>
          <ScrolleableSecction items={items[0]} />
        </section>
        <section className="max-w-[1500px] max-[900px]:w-[97%] min-[900px]:w-[100%] max-[639px]:gap-[100px] min-[639px]:gap-[150px] flex flex-wrap">
          <section
            className={`${
              isMobile ? "" : "fade-transition"
            } z-10 flex justify-center items-center w-[100%] container_responsive`}
          >
            <div className="flex flex-col first_container_info rs:pr-[10%]">
              <p className="pb-5 min-[2000px]:max-w-[500px] max-w-[600px] font-bold font__title font-FontTitle">
                <span className=" text-blue-600 ">Last landing</span> and
                website projects
              </p>
              <p className="text-slate-300 max-w-[600px] font-WorkSans font-info text-shadow">
                I’m probably the most passionate developer you will ever get to
                work with. If you have a great project that needs some amazing
                skills, I’m your guy.
              </p>
            </div>
            <div className="relative sm:w-auto flex max-[780px]:w-[90%] max-[780px]:h-[90%] min-h-[300px] max-w-[400px] min-[780px]:min-h-[320px] min-[780px]:max-w-[440px]">
              <img
                className="z-10 max-[400px]:w-auto"
                src="./Images/decoration/backgrounds/mask.webp"
                alt="image"
              />
              <img
                className={`${
                  isMobile ? "" : "fade-transition"
                } z-20 absolute h-[72%] w-[65%] top-0 left-0 right-0 bottom-16 m-auto rounded-3xl`}
                src="./Images/decoration/backgrounds/movil.webp"
                alt="Svg"
              />
              <img
                className="z-10 absolute h-[20%] w-[68%] min-[400px]:left-20 bottom-11 right-0 m-auto"
                src="./Images/decoration/backgrounds/Ellipse.png"
                alt="Svg"
              />
            </div>
          </section>
          <section
            className={`${
              isMobile ? "" : "fade-transition"
            } z-10 flex justify-center items-center w-[100%] second_container_info`}
          >
            <div className="z-10 flex flex-col justify-center items-start rs:pl-[10%]">
              <p className="pb-5 font-FontTitle min-[2000px]:max-w-[500px] font-bold font__title">
                <span className=" text-blue-600 ">Build</span> a whole new world
              </p>
              <p className=" text-slate-300 font-WorkSans max-w-[600px] font-info text-shadow">
                Through web programming. Turn your ideas into reality and bring
                your digital visions to life on this exciting journey towards
                creating engaging and interactive experiences.
              </p>
            </div>
            <div className="relative sm:w-auto flex max-[780px]:w-[90%] max-[780px]:h-[90%] min-h-[300px] max-w-[400px] min-[780px]:min-h-[320px] min-[780px]:max-w-[440px]">
              <img
                className="z-10 max-[400px]:w-auto"
                src="./Images/decoration/backgrounds/mask.webp"
                alt="image"
              />
              <img
                className={`${
                  isMobile ? "" : "fade-transition"
                } z-20 absolute h-[80%] w-[60%] max-[450px]:bottom-14 -top-0 left-6 right-0 bottom-16 m-auto rounded-3xl`}
                src="./Images/decoration/backgrounds/Code.webp"
                alt="Svg"
              />
              <img
                className="z-10 absolute h-[25%] w-[68%] max-[450px]:left-5 left-0 bottom-9 right-20 m-auto"
                src="./Images/decoration/backgrounds/EllipseDesktop.png"
                alt="Svg"
              />
            </div>
          </section>
        </section>
      </div>
      <section
        className={`${
          isMobile ? "" : "fade-transition"
        } z-10 sm:px-[10%] max-[640px]:px-[5%] flex bg-[#27262660] backdrop-blur-[30px] w-full justify-center`}
      >
        <div className=" text-white gap-7 py-9 lg:gap-[40px] flex flex-col items-center justify-center">
          <p className="text-slate-400 sm:text-4xl text-start max-[640px]:text-3xl min-[1200px]:text-[46px] font-FontTitle">
            ¡Contact Me!
          </p>
          <p className="text-slate-400 text-center font-WorkSans max-w-[600px] min-[1500px]:max-w-[700px] font-info">
            If you have an interesting project in mind or if you are looking for
            collaborators for a project, do not hesitate to contact me. I am
            open to exciting opportunities and willing to take on new
            challenges.
          </p>
          <a
            className="hover:scale-105 border min-[1200px]:text-[20px] border-slate-400 text-slate-400 rounded-md px-3 btn"
            href="mailto:adrian.camacho.zotelo@gmail.com"
            target="_blank"
          >
            Click here
          </a>
        </div>
      </section>
    </div>
  );
};

export default transition(Home);
