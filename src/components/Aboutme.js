import React, { useState } from 'react';

const Aboutme = () => {
    const [activeSkill, setActiveSkill] = useState('Optimization');
    const skills = ['Optimization', 'Design Implementation', 'Animation'];
    const optimizationSkills = ['Code Splitting', 'Cache data storing', 'Pre-fetching & Re-fetching', 'Pessimistic & Optimistic updates', 'Polling', 'Web Worker'];

    return (
        <div className="md:px-16 py-4">
            {/* Header */}
            <div className="flex justify-center my-5 lg:py-2">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md">
                        About Me
                    </span>
                    <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* About Me Text */}
                <div className="md:w-1/2 space-y-4">
                    <p>
                        I am a frontend developer with over 1.5 years of professional experience, specializing in building high-performance web applications. My focus is on delivering fast, responsive, and user-friendly experiences for your projects.
                    </p>
                    <p>
                        I hold a Bachelor's degree in Computer Science from Kathmandu University, with prior education at Nepal Police Secondary Boarding School. Every day, I wake up with the mindset to excel and write clean, efficient code.
                    </p>
                    <p>
                        Beyond my passion for coding, I enjoy playing badminton—a sport in which I competed at the junior national level.
                    </p>
                </div>

                {/* What I Can Offer Section */}
                <div className="flex flex-col w-full md:w-1/2">
                    <span className="mb-2 text-lg font-semibold">What I can offer</span>

                    {/* Skill Tabs */}
                    <div className="flex gap-4 border-b-[1px] border-[#a3a3a3]">
                        {skills.map((item, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-200 ${
                                    activeSkill === item
                                        ? 'border-b-2 border-blueTick text-blueTick font-medium'
                                        : 'text-gray-600 hover:text-blueTick'
                                }`}
                                onClick={() => setActiveSkill(item)}
                                aria-label={`Select ${item}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Skill Details */}
                    <div className="mt-4">
                        {activeSkill === 'Optimization' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {optimizationSkills.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col p-4 bg-white border border-[#a3a3a3] shadow-sm rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
                                    >
                                        <span className="text-blueTick font-bold mb-2">{index + 1}</span>
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
