import React from "react";
import Button from "./button";
import { Link } from "react-scroll";

const ScreenOne = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Kalyan_Bikram_Adhikari_Resume.pdf';
    link.download = 'Kalyan_Bikram_Adhikari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row justify-left items-center md:h-screen w-full bg-gradient-to-br p-8 md:p-16 from-[#88a5d940] to-[#387CE5]">
      {/* left section */}
      <div className="md:w-1/2 h-full flex flex-col justify-center  items-start text-white">
        <div data-aos="fade-right" className="mb-8 w-full text-left md:text-left">
          <span className="font-bold text-4xl">Hi.
            <div
              role="img"
              aria-label="Wave Emoji"
              className="mr-2 animate-bounce font-bold text-7xl inline-block"
            >
              👋
            </div>
          </span>
          <div className="text-titleBlue text-4xl font-bold">
            I'm Kalyan Bikram Adhikari
          </div>
        </div>
        <div className="font-bold text-4xl text-left md:text-left ">
          I am a Frontend & Web Developer
        </div>
        <div className='flex justify-center gap-x-8 mt-14'>
          <a href="https://github.com/Kalyanbikramadhikari">
            <img className='h-12' src="assets/images/git-hub-logo.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/kalyan-bikram-adhikari-495907266/">
            <img className='h-12' src="assets/images/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/kalyan08bikram/">
            <img className='h-12' src="assets/images/insta-logo.png" alt="Instagram" />
          </a>
          <a href="https://www.upwork.com/freelancers/~01fb47069aaec8d646">
            <img className='h-12' src="assets/images/upwork.svg" alt="Upwork" />
          </a>
        </div>
        <div className="mb-8 mt-10 flex justify-left md:justify-start">
          <button onClick={handleDownload} className="bg-white border-2 border-titleBlue text-blue-500 hover:bg-titleBlue hover:border-2 hover:border-white hover:text-white font-bold py-2 rounded-3xl h-14 px-4 pr-6">
            <i className="fas fa-download mr-2"></i> RESUME
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 h-full relative flex justify-center items-center">
        <div className="relative">
          <img
            src="assets/images/me.jpg"
            alt="Your Image"
            className="rounded-full h-64 md:h-96"
          />
          <div className="absolute -top-10 -left-5 mt-4 ml-4 bg-black rounded-full w-24 md:w-36 h-24 md:h-36 flex justify-center items-center">
            <i className="fab fa-react text-blue-500 text-6xl md:text-9xl"></i>
          </div>
          <div className="absolute -top-10 -right-5 mt-4 mr-4 bg-white rounded-full w-24 md:w-36 h-24 md:h-36 flex justify-center items-center">
            <i className="fab fa-html5 text-orange-500 text-6xl md:text-9xl"></i>
          </div>
          <div className="absolute bottom-5 -right-5 mb-4 mr-4 w-24 md:w-36 h-24 md:h-36">
            <img src="assets/images/js.jpg" className="rounded-full" alt="" />
          </div>
          <div className="absolute bottom-5 -left-5 mb-4 mr-4 bg-white w-24 md:w-36 h-24 md:h-36 rounded-full">
            <img
              src="assets/images/nodejs.png"
              className="rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenOne;
