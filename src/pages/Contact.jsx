import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import transition from "../components/Effects/Transition";
import "./../pages/style/Contact.css";
import { isMobile } from "react-device-detect";
import { setImageLoaded } from "../store/slices/imageLoading";
import { useDispatch } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setImageLoaded(true));
  }, [dispatch]);

  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_i230fo4";
    const templateId = "template_x0ndy6c";

    const apiKey = "CAGcYirrvXBLu7vke";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error));

    refForm.current.reset();
  };

  return (
    <section className="min-h-screen text-white gap-8 flex flex-col items-center pb-10 max-[640px]:pt-[110px] pt-28">
      <div className="z-10 flex w-[100%] max-w-[1700px] sm:w-[80%] max-[1740px]:mr-[5%]  max-[640px]:pl-[5%] justify-start">
      </div>
      <section
        className={`${
          isMobile ? "" : "fade-transition"
        } z-10 pt-4 max-[639px]:w-[90%] sm:w-[80%] flex flex-col items-center`}
      >
        <div className="z-10 flex flex-col items-center">
          <p className="text-shadow min-[1500px]:max-w-[1400px] pb-7 text-3xl font-light max-[640px]:px-[2%] font-WorkSans ">
            <span className="text-blue-500 text-3xl font-bold ">¡Hello! </span>
            If you have any questions, suggestions, or just want to get in
            touch, I'd love to hear from you! Although I'm in the early stages
            of my programming career, I'm excited to expand my network and learn
            from people with experience in the field.
          </p>
        </div>
      </section>

      <section className="max-[980px]:flex-col max-[1200px]:w-[100%] flex flex-wrap max-[980px]:w-[100%] w-[80%] max-[639px]:w-[90%] max-w-[1400px] items-center justify-center gap-20 max-[980px]:gap-16 max-[930px]:gap-12 pt-10 max-[980px]:pt-0">
        <div
          className={`${
            isMobile ? "" : "fade-transition"
          } flex flex-col items-start w-[43%] max-[1200px]:w-[32%] max-[980px]:w-[80%] max-[639px]:w-[95%] z-30`}
        >
          <p className="text-gray-200 text-2xl min-[1080px]:text-3xl">
            <b>
              You can contact me through my different
              <span className="text-red-600 font-medium min-[1080px]:text-3xl">
                <b> social networks,</b>
              </span>{" "}
              or you can also write me a message in the following form &gt;ᆺ&lt;
            </b>
          </p>

          <section className="pt-10">
            <p>
              <b>Name:</b> Fabio Camacho
            </p>
            <p>
              <b>Phone:</b> +52 461-308-0331
            </p>
            <p>
              <b>Address:</b> adrian.camacho.zotelo@gmail.com
            </p>
            <p>
              <b>Hours:</b> 24/7
            </p>
          </section>

          <ul className="z-10 flex justify-center pt-10 gap-2 ">
            <li>
              <a
                href="mailto:adrian.camacho.zotelo@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <i className="bx bx-envelope text-5xl text-red-500 footer__link hover:bg-slate-600 social_media hover:rounded-3xl ease-out duration-75  hover:text-red-300"></i>
              </a>
            </li>

            <li>
              <a
                href="https://wa.link/0xb456"
                target="_blank"
                aria-label="WhatsApp"
              >
                <i className="bx bxl-whatsapp text-green-500 text-5xl hover:bg-slate-600 social_media hover:rounded-3xl footer__link ease-out duration-75 hover:green-red-300"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/fabio-camacho-a41b17281/"
                aria-label="Linkedin"
                target="_blank"
              >
                <i className="bx bxl-linkedin-square text-sky-500 social_media text-5xl footer__link ease-out duration-75 hover:bg-slate-600 hover:rounded-3xl hover:text-sky-300"></i>
              </a>
            </li>

            <li>
              <a href="" aria-label="Facebook" target="_blank">
                <i className="bx bxl-facebook-circle text-sky-500 text-5xl hover:text-sky-300 social_media hover:rounded-3xl footer__link ease-out duration-75 hover:bg-slate-600"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Adi020"
                aria-label="GitHub"
                target="_blank"
              >
                <i className="bx bxl-github text-slate-300 text-5xl social_media hover:text-slate-100 footer__link ease-out duration-75 hover:rounded-3xl hover:bg-slate-600"></i>
              </a>
            </li>
          </ul>
        </div>

        <form
          className={`${
            isMobile ? "" : "fade-transition"
          } backdrop-blur-[10px] min-[980px]:border border-l-[#6e11198e] border-r-[#6e11198e] border-t-[#4d39be62] border-b-[#4d39be62] rounded-3xl sm:min-w-[400px] max-[639px]:h-[600px] max-[980px]:w-[100%] max-[400px]:w-[95%] max-[980px]:mt-8 w-[35%] min-w-[290px] h-[600px] flex flex-col z-30 items-center justify-around gap-y-6 text-gray-300`}
          ref={refForm}
          onSubmit={handleSubmit}
        >
          <h2 className="pt-4 text-blue-400 font-medium text-3xl">Write me</h2>

          <div className="w-[90%] flex justify-center items-center gap-x-2 font-bold">
            <label htmlFor=""></label>
            <input
              className="outline-none font-medium px-2 border-gray-700 bg-transparent rounded-md h-[36px] w-[90%] "
              name="username"
              type="text"
              placeholder="Type your name..."
              required
            />
          </div>

          <div className="w-[90%] flex gap-x-2 items-center justify-center font-bold">
            <label className="" type="email" name="email"></label>
            <input
              className="outline-none h-[36px] px-2 border-gray-700 bg-transparent rounded-md w-[90%] font-medium "
              name="username"
              type="text"
              placeholder="Type your email..."
              required
            />
          </div>

          <div className="w-[90%] flex gap-x-2 justify-center font-bold">
            <label htmlFor=""></label>
            <textarea
              className="outline-none font-medium px-2 border-gray-700 bg-transparent  rounded-md w-[90%]"
              name="message"
              placeholder="Type your message..."
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>

          <button className="flex justify-center items-center w-[140px] bg-blue-500 hover:bg-blue-400 rounded-xl shadw text-2xl font-medium mb-4">
            <i className="bx bx-send pr-4"></i>Send
          </button>
        </form>
      </section>
    </section>
  );
};

export default transition(Contact);
