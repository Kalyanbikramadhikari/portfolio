import React, { useEffect, useState } from "react";
// import nichub from '../../public/assets/images/nichub.png'
// import facebookClone from '../../public/assets/images/fb-clone.png'
// import explorelive from '../../public/assets/images/explorelive.png'
// import shopit from '../../public/assets/images/shopit.jpg'
// import facebookClone from '../../public/assets/images/fb-clone.png'
// import facebookClone from '../../public/assets/images/fb-clone.png'

// import Button from "./button";

const Project = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const projectSections = document.querySelectorAll(".project-section");

      projectSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        setIsVisible((prevState) => ({
          ...prevState,
          [section.id]: sectionTop < windowHeight,
        }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contents = [
    {
      pname: "NIC HUB",
      description:
        "NIC Hub website is project of NICs assigned to me by Assistant Professor Dr.Sushil Shrestha sir. NICs are the groups of stakeholders from diverse backgrounds solving problems together using the tools of improvement science, specifically Plan-Do-Study-Act cycles. As the developer affiliated with the Digital Learning Research Lab at Kathmandu University, I took on the responsibility of crafting and refining the NIC Hub website.  ",
      imagesrc: '/assets/images/nichub.png',
      ticket1: '/assets/images/wordpress-ticket.png'
    },
    {
      pname: "Explore Live",
      description:
        "exploreLive is a web application that allows users to explore and book home stays online. It is developed using MERN stack and is an interactive web application. It uses stripeJS for online payment and incorporates features such as user authentication, different kinds of filters like filtering home stays by distance, price, etc. ",
      imagesrc: '/assets/images/explorelive.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/nodejs-ticket.png',
      ticket3: '/assets/images/stripejs-ticket.png'



    },
    {
      pname: "Facebook Clone",
      description:
        "The Facebook clone project replicates the renowned social media platform, Facebook. This endeavor aims to recreate the familiar UI of Facebook while providing a platform for learning and experimentation.Built using cutting-edge technologies, the frontend of the Facebook clone is crafted with React.js and Tailwind CSS. One of the key features of the Facebook clone is its responsiveness across various devices and screen sizes. Whether accessed from a desktop, laptop, tablet, or smartphone, users can seamlessly navigate and engage with the platform, ensuring an optimal experience regardless of the device being used.",
      imagesrc: '/assets/images/fb-clone.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/tailwind-ticket.png',
      // ticket3:'/assets/images/stripejs-ticket.png'
    },
    {
      pname: "Shopit",
      description:
        "This project Shopit is a dynamic web-based e-commerce platform designed to provide users with a seamless online shopping experience. This project serves as a comprehensive solution for purchasing a wide range of products conveniently from the comfort of one's own home. At the core of Shopit's functionality lies its integration with Stripe, a leading online payment processing platform. This partnership ensures secure and efficient transactions, allowing users to make purchases with confidence and ease. One of the standout features of Shopit is its interactive feedback system, which provides users with real-time responses based on their actions within the interface. This personalized feedback enhances user engagement and facilitates a more intuitive browsing and shopping experience.s to generate dummy text for various purposes using the classic Lorem Ipsum text as a base.",
      imagesrc: '/assets/images/shopit.jpg',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/nodejs-ticket.png',
      ticket3: '/assets/images/stripejs-ticket.png'
    },
    {
      pname: "Instagram Clone",
      description:
        "The Instagram clone project replicates the renowned social media platform, Instagram. This endeavor aims to recreate the familiar UI of Instragram while providing a platform for learning and experimentation.Built using cutting-edge technologies, the frontend of the Instagram clone is crafted with React.js and Tailwind CSS. One of the key features of the Facebook clone is its responsiveness across various devices and screen sizes. Whether accessed from a desktop, laptop, tablet, or smartphone, users can seamlessly navigate and engage with the platform, ensuring an optimal experience regardless of the device being used.",
      imagesrc: '/assets/images/insta-clone.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/tailwind-ticket.png',
      // ticket3:'/assets/images/stripejs-ticket.png'
    },
    {
      pname: "DLR Lab",
      description:
        "DLR Lab website is project of assigned to me by Assistant Professor Dr.Sushil Shrestha sir. ",
      imagesrc: '/assets/images/dlrlab.png',
      ticket1: '/assets/images/wordpress-ticket.png'
    },
    {
      pname: "Game Dashboard",
      description:
        "The dashboard serves as the main interface for users to interact with the recording game transactions system. It typically includes an overview of key statistics and features. Users can view a history of all past transactions, including details such as transaction type (recharge or deduction), amount, date, and transaction ID. The dashboard is responsive and works well on various devices and screen sizes. Also error handling and feedback to users when errors occur during transactions or other interactions are handled. ",
      imagesrc: '/assets/images/game.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/mui-ticket.png',
      // ticket3:'/assets/images/stripejs-ticket.png'
    },
  ];

  const projectComponent = (index, pr) => {
    const isEven = index % 2 === 0;

    return (
      // data-aos={index%2===0?"fade-right":"fade-left"}
      <div key={index} className="flex items-center w-full gap-x-12 p-16">

        {/* Left component */}
        <div


          className={`flex-initial w-1/2  rounded-lg   flex justify-center project-section ${isEven ? "" : "order-1"
            }`}
          id={`project-section-${index}`}
        >
          {
            isVisible[`project-section-${index}`] && (
              <div
                data-aos-delay={index * 100}
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                {<img
                  src={pr.imagesrc}
                  alt="Project"
                  className="w-full h-auto rounded-lg"
                />}
              </div>
            )
          }

        </div>

        {/* Right component */}
        <div


          className={`w-1/2 items-start shadow-2xl p-5   text-start rounded-lg ${isEven ? "order-1" : ""
            }`}
        >

          {isVisible[`project-section-${index}`] && (
            <div
              data-aos-delay={index * 100}
              data-aos={isEven ? "fade-left" : "fade-right"}
            >
              <h2 className="text-[1.4rem] font-semibold text-titleBlue">{pr.pname}</h2>
              <h3 className="text-[1rem] font-normal text-sm">{pr.description}</h3>
              <div className=" mt-5 flex gap-x-4">
                <img className="h-10 " src={pr.ticket1} alt="" />
                {
                  pr.ticket2 && 
                <img className="h-10 " src={pr.ticket2} alt="" />
                
                }

{
                  pr.ticket3 && 
                <img className="h-10 " src={pr.ticket3} alt="" />
                
                }
              </div>
            </div>

          )}
        </div>
      </div>
    );
  };


  return (
    <section className="">
      <div id="project" className="flex pt-16 justify-center my-5 ">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
        </div>
      </div>
      {contents.map((pr, index) => (
        projectComponent(index, pr)


      ))}

      {/* Second project */}
    </section>
  );
};

export default Project;
