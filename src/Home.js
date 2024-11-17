import React, { useEffect, useState } from 'react'
import ScreenOne from './components/ScreenOne';
import Navbar from './components/navbar';
import Contributions from './components/Contributions'
import Aboutme from './components/Aboutme';
import Skills from './components/skills';
import WorkExperience from './components/Experience';
import Projects from './components/projects';
import GetInTouch from './components/getInTouch';
import Footer from './components/footer'

const Home = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {loading ? (
                <div className='text-4xl h-screen bg-customBlue flex justify-center items-center '>
                    <div className="text-white animate-bounce animate-typewriter font-bold text-4xl "> {/* Add Tailwind's text-white class, animate-pulse for a subtle pulse animation, and font-bold for bold text */}
                        Loading ...
                    </div>
                </div>
            ) : (
                <div >
                    <ScreenOne />
                    <Navbar />
                    <div className=" bg-gradient-to-r from-white to-[#f0f4ff]">
                        <Contributions />
                        {/* <OpenSourceContributions /> */}
                        <Aboutme />
                        <Skills />

                        <WorkExperience />
                        <Projects />
                        <GetInTouch />
                        <Footer />
                    </div>

                </div>
            )
            }
        </div>
    )
}

export default Home