import React from 'react';

const GetInTouch = () => {
    return (
        <div id='get-in-touch' className="container mx-auto">
            <div className='border-t my-5 lg:my-10 border-[#25213b]'>
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-full">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                    </div>
                </div>
                <div className="flex justify-center my-5 lg:py-2">
                    <div className="flex items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md">
                            Get In Touch
                        </span>
                        <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center my-8'>
                <div className='font-medium text-lg text-center lg:text-2xl'>
                    Please feel free to contact me if you need any sort of website.
                </div>
                <div className='font-medium text-lg text-center lg:text-2xl'>
                    I will try to help you as soon as I can. 🤗
                </div>
                <div className='flex justify-center gap-x-8 mt-14'>
                    <a href="https://github.com/Kalyanbikramadhikari">
                        <img className='h-12' src="assets/images/git-hub-logo.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/kalyan-bikram-adhikari-495907266/">
                        <img className='h-12' src="assets/images/linkedin-logo.png" alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/kalyan08bikram/">
                        <img className='h-12' src="assets/images/insta-logo.png" alt="Instagram" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01fb47069aaec8d646">
                        <img className='h-12' src="assets/images/upwork.svg" alt="Upwork" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
