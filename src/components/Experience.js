import React from "react";

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            company: "TechGlazers Pvt. Ltd.",
            role: "Frontend Developer",
            date: "Jun 2024 - PRESENT",
            description:
                "Working with a cross-functional team in a fast-paced environment to build, maintain and test a user-centric fintech solution using modern technologies.",
            logo: "/assets/images/techglazers.png",
        },
        {
            id: 2,
            company: "Techore Solution",
            role: "Frontend Developer",
            date: "Nov 2022 - Jan 2024",
            description:
                "Technical content author tasked with creating interactive real-world tutorials, focused on topics like Next.js, TypeScript, React.",
            logo: "/assets/images/techoresolution.png",
        },
        {
            id: 3,
            company: "Digital Learning Research Lab",
            role: "Web Developer",
            date: "Feb 2024 - April 2024",
            description:
                "Volunteer writer for freeCodeCamp, producing technical articles around topics like Next.js, React, and JavaScript.",
            logo: "/assets/images/ku.png",
        },

    ];

    return (
        <div className=" mx-16 ">
            <div className="flex justify-center my-5 lg:py-4">
                <div className="flex items-center">
                    <span className="w-16 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md shadow-md">
                        Work Experience
                    </span>
                    <span className="w-16 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        // className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                        className="flex items-start space-x-6 p-4 mr-14 "

                    >
                        <div className="flex flex-col items-center">
                            <div className="p-4 bg-[#f5f4f4] border border-[#c7c7c7] rounded-md   ">
                                <img src={exp.logo} alt="" className={`:h-12 ${exp.logo.includes('techglazers') ? 'w-32' : exp.logo.includes('ku') ? 'xl:w-[80px]' : 'xl:w-[90px]'}`} />
                            </div>
                            <div
                                className="h-[70px] border-l rounded-lg"
                                style={{
                                    borderImage: "linear-gradient(to bottom, #c7c7c7, #ebebeb) 1",
                                }}
                            ></div>
                        </div>


                        {/* <div className=" p-1 rounded-sm border-[1px] border-[#a3a3a3] "> */}
                        {/* <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className=" h-12"
                        /> */}
                        {/* </div> */}

                        <div>
                            <h3 className="text-xl font-semibold">{exp.company}</h3>
                            <p className="text-md font-medium mt-1 text-gray-700">{exp.role}</p>
                            <p className="text-sm mt-2 text-gray-400">
                                {exp.date.includes("PRESENT") ? (
                                    <>
                                        {exp.date.split("PRESENT")[0]}
                                        <span className="text-green-500 font-semibold">PRESENT</span>
                                    </>
                                ) : (
                                    exp.date
                                )}
                            </p>
                            <p className="text-[17px] text-gray-700 mt-2">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
