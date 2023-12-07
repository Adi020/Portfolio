import transition from "../components/Effects/Transition";
import photo from "../../public/Images/decoration/backgrounds/photo.webp";
import { isMobile } from "react-device-detect";
import { useImageLoad } from "../hooks/useImageLoad";
import CV from "../../public/CV/CV.pdf";

const About = () => {
  const { imgRef, handleImageLoad } = useImageLoad();

  return (
    <section className="px-[5%] min-h-screen text-white flex flex-wrap justify-center mx-auto items-center max-[640px]:pt-[110px] pb-10 pt-28 gap-12 max-w-[2000px]">
      <section className="z-10 w-full flex justify-center flex-col items-center">
        <article
          className={`${
            isMobile ? "" : "fade-transition"
          } w-full max-[780px]:items-center max-[780px]:flex-col-reverse flex max-w-[2000px] justify-center mx-auto min-[780px]:flex-row-reverse gap-14 min-[800px]:gap-[10%]`}
        >
          <article className="flex flex-col items-center z-30 max-[780px]:max-w-[500px] min-[780px]:max-w-[500px]">
            <img
              ref={imgRef}
              onLoad={handleImageLoad}
              src={photo}
              alt="Developer's photo"
            />
            <button className="btn mt-4 border px-3 border-slate-200 rounded-md hover:scale-105 w-[190px]">
              <a href={CV} download>
                Download CV
              </a>
            </button>
          </article>
          <article className="z-10 flex flex-col justify-center items-start">
            <p className="sm:pb-3 max-[639px]:pb-4 font-FontTitle min-[3000px]:max-w-[600px] min-[780px]:w-[300px] font-bold font__title">
              <span className="text-blue-600">Hi!</span> I’am Fabio
            </p>
            <p className="text-slate-300 max-w-[700px] min-[3000px]:max-w-[740px] font-WorkSans font-info text-shadow">
              and i'm excited to start my career in the world of programming. I
              am an enthusiast who is passionate about learning and exploring
              new technologies.. Although I am in my first steps in the field of
              programming, I am committed to my growth and development. My main
              focus so far has been web development, where I gained a basic
              understanding of HTML, React, CSS, and JavaScript.
            </p>
          </article>
        </article>
      </section>
    </section>
  );
};

export default transition(About);
