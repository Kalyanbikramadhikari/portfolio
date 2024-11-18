import React, { useEffect, useState } from "react";
// import nichub from '../../public/assets/images/nichub.png'
// import facebookClone from '../../public/assets/images/fb-clone.png'
// import explorelive from '../../public/assets/images/explorelive.png'
// import shopit from '../../public/assets/images/shopit.jpg'
// import facebookClone from '../../public/assets/images/fb-clone.png'
// import facebookClone from '../../public/assets/images/fb-clone.png'

// import Button from "./button";
// import { Link } from "react-router-dom";

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
      pname: "Beer Website",
      description:
        "  This personal project showcases an animated and interactive website for the Nepal Ice Beer brand, built using React, Tailwind CSS, and GSAP for smooth and captivating animations. This showcases scroll-triggered animations powered by GSAP . The website demonstrates modern web development practices with a focus on smooth user interactions and engaging visual elements.",
      imagesrc: '/assets/images/nepalice.png',
      ticket1: '/assets/images/react-ticket.png',
      // ticket2: '/assets/images/nodejs-ticket.png',
      // ticket3: '/assets/images/stripejs-ticket.png',
      // ticket4: '/assets/images/redux-ticket.svg',
      ticket2: '/assets/images/tailwind-ticket.png',


      link1: 'https://github.com/Kalyanbikramadhikari/nepalice',
      link2:''



    },{
      pname: "Auditica",
      description:
        "Auditica is a sleek and modern web application frontend development prototype for an online music streaming platform. The project focuses on delivering a visually appealing interface that showcases a potential layout and design for a music streaming service. This is built using React and Tailwind CSS. ",
      imagesrc: '/assets/images/auditica.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/tailwind-ticket.png',


      link1: 'https://github.com/Kalyanbikramadhikari/auditica'
    },{
      pname: "Nike Website",
      description:
        "The Nike Website is a front-end design implementation that showcases a modern and responsive web interface inspired by the popular shoe brand Nike. This project aims to develop better look and feel of an e-commerce platform for Nike sneakers, offering a visually appealing and user-friendly experience. Utilizing React for dynamic components and Tailwind CSS for styling, the website provides a clean, minimalist design, focusing on showcasing the Nike brand's premium products.",
      imagesrc: '/assets/images/nike.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/tailwind-ticket.png',


      link1: 'https://github.com/Kalyanbikramadhikari/sneakers'
    },
    // ,{
    //   pname: "Auditica",
    //   description:
    //     "Auditica is a web application frontend design implementation trying to make an online music streaming application. ",
    //   imagesrc: '/assets/images/auditica.png',
    //   ticket1: '/assets/images/react-ticket.png',
    //   ticket2: '/assets/images/tailwind-ticket.png',


    //   link1: 'https://github.com/Kalyanbikramadhikari/auditica'
    // },
    {
      pname: "NIC HUB",
      description:
        "I was entrusted with developing the website for the NIC Hub, a project by Assistant Professor Dr. Sushil Shrestha focused on collaborative problem-solving. NICs (Network Improvement Communities) bring together stakeholders from diverse backgrounds to tackle challenges using Plan-Do-Study-Act cycles. In my role as a developer affiliated with the Digital Learning Research Lab at Kathmandu University, I played a key role in crafting and refining the NIC Hub website.  ",
      imagesrc: '/assets/images/nichub.png',
      ticket1: '/assets/images/wordpress-ticket.png',
      link1: 'https://nichub.ku.edu.np'
    },
    {
      pname: "Explore Live",
      description:
        "exploreLive is a web application that allows users to explore and book home stays online. It is developed using MERN stack and is an interactive web application. It uses stripeJS for online payment and incorporates features such as user authentication, different kinds of filters like filtering home stays by distance, price, etc. ",
      imagesrc: '/assets/images/explorelive.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/nodejs-ticket.png',
      ticket3: '/assets/images/stripejs-ticket.png',
      ticket4: '/assets/images/redux-ticket.svg',

      link1: 'https://github.com/Kalyanbikramadhikari/exploreLive'



    },
    {
      pname: "Facebook Clone",
      description:
        "The Facebook clone project replicates the renowned social media platform, Facebook. The frontend of the Facebook clone is crafted with React.js and Tailwind CSS. One of the key features of the Facebook clone is its responsiveness across various devices and screen sizes. Whether accessed from a desktop, laptop, tablet, or smartphone, users can seamlessly navigate and engage with the platform, ensuring an optimal experience regardless of the device being used.",
      imagesrc: '/assets/images/fb-clone.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/tailwind-ticket.png',
      // ticket3:'/assets/images/stripejs-ticket.png'
      link1: 'https://github.com/Kalyanbikramadhikari/facebookclone'
    },
    {
      pname: "DLR Lab",
      description:
        "I had the pleasure of developing the website for the DLR (Digital Learning Research) Lab at Kathmandu University Central Campus. The Lab is led by Assistant Professor Dr. Sushil Shrestha. I worked closely with Dr. Shrestha to understand his requirements and translate them into a user-friendly and informative website.",
      imagesrc: '/assets/images/dlrlab.png',
      ticket1: '/assets/images/wordpress-ticket.png',

      link1: 'https://dlrlab.ku.edu.np/'
    },
    {
      pname: "Shopit",
      description:
        "This project Shopit is a dynamic web-based e-commerce platform designed to provide users with a seamless online shopping experience. This project serves as a comprehensive solution for purchasing a wide range of products conveniently from the comfort of one's own home. At the core of Shopit's functionality lies its integration with Stripe, a leading online payment processing platform. This partnership ensures secure and efficient transactions, allowing users to make purchases with confidence and ease. One of the standout features of Shopit is its interactive feedback system, which provides users with real-time responses based on their actions within the interface. This personalized feedback enhances user engagement and facilitates a more intuitive browsing and shopping experience.s to generate dummy text for various purposes using the classic Lorem Ipsum text as a base.",
      imagesrc: '/assets/images/shopit.jpg',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/nodejs-ticket.png',
      ticket3: '/assets/images/stripejs-ticket.png',
      ticket4: '/assets/images/redux-ticket.svg',

      link1: 'https://github.com/Kalyanbikramadhikari/e-commerce'
    },
    {
      pname: "Instagram Clone",
      description:
        "The Instagram clone project replicates the renowned social media platform, Instagram. The frontend of the Instagram clone is crafted with React.js and Tailwind CSS. One of the key features of the Facebook clone is its responsiveness across various devices and screen sizes. Whether accessed from a desktop, laptop, tablet, or smartphone, users can seamlessly navigate and engage with the platform, ensuring an optimal experience regardless of the device being used.",
      imagesrc: '/assets/images/insta-clone.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/tailwind-ticket.png',
      // ticket3:'/assets/images/stripejs-ticket.png',
      link1: 'https://github.com/Kalyanbikramadhikari/Instagram-clone'
    },
    
    {
      pname: "Game Dashboard",
      description:
        "The dashboard serves as the main interface for users to interact with the recording game transactions system. It typically includes an overview of key statistics and features. Users can view a history of all past transactions, including details such as transaction type (recharge or deduction), amount, date, and transaction ID. The dashboard is responsive and works well on various devices and screen sizes. Also error handling and feedback to users when errors occur during transactions or other interactions are handled. ",
      imagesrc: '/assets/images/game.png',
      ticket1: '/assets/images/react-ticket.png',
      ticket2: '/assets/images/mui-ticket.png',

      // ticket3:'/assets/images/stripejs-ticket.png'

      link1: 'https://github.com/Techore/royal-roulette-frontend'
    },
    {
      pname: "Allan Solly UI",
      description:
        "As per the requirement of my Upwork client this was developed with the use of pure HTML and CSS. He wanted no framework or library to be used and the work to be done in plain HTML and CSS and I had it done as per his requirement.",
      imagesrc: '/assets/images/allansolly.png',
      ticket1: '/assets/images/html-ticket.png',
      ticket2: '/assets/images/css-ticket.png',
      // ticket3:'/assets/images/stripejs-ticket.png'
    },
  ];

  const projectComponent = (index, pr) => {
    const isEven = index % 2 === 0;

    return (
      // data-aos={index%2===0?"fade-right":"fade-left"}
      <div key={index} className="py-2 px-4 flex  flex-col lg:flex-row md:px-16 md:py-10 items-center w-full gap-x-12 ">

        {/* Left component */}
        <div


          className={`flex-initial w-full lg:w-1/2 lg:rounded-lg   flex justify-center project-section lg:${isEven ? "" : "order-1"
            }`}
          id={`project-section-${index}`}
        >
          {
            isVisible[`project-section-${index}`] && (
              <div
                data-aos-delay={index * 100}
                data-aos={isEven ? "fade-right" : "fade-right"}
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


          className={`w-full lg:w-1/2 items-start shadow-2xl p-5   text-start rounded-lg lg:${isEven ? "order-1" : ""
            }`}
        >

          {isVisible[`project-section-${index}`] && (
            <div
              data-aos-delay={index * 100}
              data-aos={isEven ? "fade-left" : "fade-left"}
            >
              <h2 className="text-[1.4rem] font-semibold text-titleBlue text-justify">{pr.pname}</h2>
              <h3 className="text-[1rem] font-normal text-sm">{pr.description}</h3>
              <div className=" mt-2 mb-2 flex gap-x-4 flex-wrap">
                <img className="h-10 " src={pr.ticket1} alt="" />
                {
                  pr.ticket4 &&
                  <img className="h-10 " src={pr.ticket4} alt="" />

                }
                {
                  pr.ticket2 &&
                  <img className="h-10 " src={pr.ticket2} alt="" />

                }

                {
                  pr.ticket3 &&
                  <img className="h-10 " src={pr.ticket3} alt="" />

                }
                
              </div>

              {
                pr.link1 &&
                <div>
                  <a
                    href={pr.link1}
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Recommended for security
                  >
                    <button className="bg-white border-2 border-blueTick text-blueTick hover:bg-blueTick hover:border-2 hover:border-white hover:text-white font-bold rounded-xl h-10 px-5">
                      View Project <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </button>
                  </a>
                </div>
              }

            </div>

          )}
        </div>
      </div>
    );
  };


  return (
    <section className="">
      <div id="project" className="flex lg:pt-16 justify-center my-5 ">
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
