import React from "react";
import Button from "./button";
import { Link } from "react-scroll";

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/resume/Kalyan_Bikram_Adhikari_Resume.pdf'; 
        link.download = 'Kalyan_Bikram_Adhikari_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div class="flex justify-center items-center h-screen w-[100%] bg-gradient-to-br p-16 from-[#88a5d940] to-[#387CE5]">
      <div className="w-1/2  h-full flex flex-col justify-center items-start text-white  ">
        <div data-aos="fade-right" className="mb-8  w-full">
          

          <span className="font-bold text-4xl">Hi. <div
              role="img"
              aria-label="Wave Emoji"
              className="mr-2 animate-bounce font-bold text-7xl inline-block "
            >
              👋
            </div> </span>
          <div className="text-titleBlue text-4xl font-bold">
          I'm Kalyan Bikram Adhikari
          </div>
          {/* <div className="inline"> */}
            
          {/* </div> */}
        </div>
        <div className="font-bold text-4xl">
          I am a Frontend and Web Developer
        </div>

        <div className="mb-8 mt-20 flex  gap-10">
        {/* <Link
          to="get-in-touch"
          // smooth={true}
          offset={-1}
          duration={0}
          className="cursor-pointer"
        >
          <Button text="CONTACT ME" icon="fa-solid fa-user ml-3" />
          
        </Link> */}

          <button onClick={handleDownload} className="bg-white border-2 border-titleBlue text-blue-500 hover:bg-titleBlue hover:border-2 hover:border-white hover:text-white font-bold py-2  rounded-3xl h-14 px-4 pr-6 ">
            <i className="fas fa-download mr-2"></i> RESUME
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2  h-full relative flex justify-center items-center">
        <div className="relative ">
          <img
            src="assets/images/me.jpg"
            alt="Your Image"
            className="rounded-full h-96"
          />
          <div className="absolute -top-10 -left-5 mt-4 ml-4 bg-black rounded-full w-36 h-36 flex justify-center items-center">
            <i className="fab fa-react text-blue-500 text-9xl"></i>
          </div>
          <div className="absolute  -top-10 -right-10 mb-4 mr-4 bg-white rounded-full pt-4 w-36 h-36 flex justify-center items-center">
            <i className="fab fa-html5 text-orange-500 text-9xl"></i>
          </div>
          <div className="absolute bottom-5 -right-10 mb-4 mr-4   w-36 h-36">
            <img src="assets/images/js.jpg" className="rounded-full" alt="" />
          </div>
          <div className="absolute bottom-5 -left-5 mb-4 mr-4 bg-white w-36 h-36 rounded-full">
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

export default Home;
