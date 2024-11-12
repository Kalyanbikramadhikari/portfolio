import React, { useState } from 'react'

const Aboutme = () => {
    const [activeYear, setActiveYear] = useState('2024')
    return (
        <div>
            <span className="font-[20px]">About Me</span>
            <div className="flex">
                <div className="flex flex-col">
                    <span>Contribution Graph</span>
                    <div className="flex gap-4">
                        <div className="bg-white  border-[1px] border-[#a3a3a3] px-4 py-8">
                            {
                                activeYear === '2024' && (
                                    <img src="assets/images/" alt="" />

                                )
                            }
                            {
                                activeYear === '2023' && (
                                    <img src="assets/images/" alt="" />

                                )
                            }
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                            {/* <button className= 'bg-[#0CCE6B] rounded-md p-2 px-4'>2024</button> */}
                            <button className={` p-2 px-4 ${activeYear === '2024' ? 'bg-[#1f9110]' : 'bg-white border-[1px] border-[#a3a3a3]'}  rounded-md `} onClick={() => setActiveYear('2024')}>2024</button>

                            <button className={` p-2 px-4 ${activeYear === '2023' ? 'bg-[#1f9110]' : 'bg-white border-[1px] border-[#a3a3a3]'}  rounded-md `} onClick={() => setActiveYear('2023')}>2023</button>



                        </div>
                    </div>

                </div>
                <div className="flex"></div>
            </div>

        </div>
    )
}

export default Aboutme