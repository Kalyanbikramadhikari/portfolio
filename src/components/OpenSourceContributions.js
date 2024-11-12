import React from 'react'

const OpenSourceContributions = () => {
    return (
        <div className='md:px-16 py-2'>
            <div className="flex justify-center my-5 lg:py-2">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md">
                        Open Source Contribution
                    </span>
                    <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex">
                    <span>Package Name:</span>
                    <span>base64code-to-image</span>
                </div>
                <div className="flex">
                    <span>Published On:</span>
                    <span>npmjs.com</span>
                </div>
                <div className="flex">
                    <span>Link:</span>
                    <span><a  target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/base64code-to-image" className='text-[#0000FF] border-b-[1px] border-[#0000FF]'>Browser Package</a></span>
                </div>
            </div>
        </div>
    )
}

export default OpenSourceContributions