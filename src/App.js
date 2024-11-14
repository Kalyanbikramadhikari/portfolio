
import { useEffect, useState } from 'react';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import Navbar from './components/navbar';
import GetInTouch from './components/getInTouch';
import Footer from './components/footer';
import OpenSourceContributions from './components/OpenSourceContributions';
// import Aboutme from './components/Aboutme';
import WorkExperience from './components/Experience';
import Contributions from './components/Contributions';
import Aboutme from './components/Aboutme';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div >

      {loading ? (
        <div className='text-4xl h-screen bg-customBlue flex justify-center items-center '>
          <div className="text-white animate-bounce animate-typewriter font-bold text-4xl "> {/* Add Tailwind's text-white class, animate-pulse for a subtle pulse animation, and font-bold for bold text */}
            Loading ...
          </div>
        </div>
      ) : (
        <div >
          <Home />
          <Navbar />
          <div className=" bg-gradient-to-r from-white to-[#f0f4ff]">
            <Contributions />
            {/* <OpenSourceContributions /> */}
            <Aboutme/>
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
  );
}

export default App;



