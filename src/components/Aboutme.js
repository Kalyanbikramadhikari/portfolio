import React, { useState } from 'react'

const Aboutme = () => {
    const [activeYear, setActiveYear] = useState('2024');
    const skills = ['Optimization', 'Design Implementation', 'State Management']
    const [activeSkill, setActiveSkill] = useState(skills[0])

    return (
        <div className='md:px-16 py-2'>
            <div className="flex justify-center my-5 lg:py-2">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md">
                        About Me
                    </span>
                    <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>
            <div className="flex gap-12 ">
                {/* contribution graph */}
                <div className="flex flex-col w-full md:w-1/2 ">
                    <span>Contribution Graph</span>
                    <div className="flex gap-4">
                        <div className="bg-white  border-[1px] border-[#a3a3a3] px-4 py-8 rounded-lg">
                            {
                                activeYear === '2024' && (
                                    <img src="assets/images/2024contribution.png" alt="" />

                                )
                            }
                            {
                                activeYear === '2023' && (
                                    <img src="assets/images/2023contribution.png" alt="" />

                                )
                            }
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                            {/* <button className= 'bg-[#0CCE6B] rounded-md p-2 px-4'>2024</button> */}
                            <button className={` p-2 px-4 ${activeYear === '2024' ? 'bg-[#1f9110] text-white' : 'bg-white border-[1px] border-[#a3a3a3]'}  rounded-md `} onClick={() => setActiveYear('2024')}>2024</button>

                            <button className={` p-2 px-4 ${activeYear === '2023' ? 'bg-[#1f9110] text-white' : 'bg-white border-[1px] border-[#a3a3a3]'}  rounded-md `} onClick={() => setActiveYear('2023')}>2023</button>



                        </div>
                    </div>

                </div>
                {/* what i can offer */}
                <div className="flex flex-col w-full md:w-1/2 ">
                    <span>What I can offer </span>
                    <div className="flex">
                        <span>I am a frontend developer with over 1.5 years of professional experience, I specialize in building high-performance web applications offering these features for your web applications.</span>
                    </div>

                    <div className="flex  gap-3 border-y-[1px] border-[#a3a3a3]">
                        {
                            skills.map((item, index) => (
                                <span className={`${activeSkill === item ? 'border-blueTick border-b-[2px] text-blueTick font-medium' : ''} px-3 text-sm  p-2 cursor-pointer`} onClick={() => setActiveSkill(item)} key={index}>{item}</span>
                            ))
                        }

                    </div>

                    <div className="flex">
                        {
                            activeSkill === 'Optimization' && (
                                <div className='text-sm px-3'>
                                    <ul>
                                        <li>Advanced prefetching strategies</li>
                                        <li>Browser caching optimization</li>
                                        <li>Database query reduction techniques</li>
                                        <li>Web Workers for enhanced performance</li>
                                        <li>advanced prefetching strategies</li>
                                        <li>advanced prefetching strategies</li>


                                    </ul>
                                </div>
                            )
                        }
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Aboutme