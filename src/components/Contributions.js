import React, { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';

const Contributions = () => {
    const [activeYear, setActiveYear] = useState('2024');

    return (
        <div className="px-4 md:px-16 py-6">
            {/* Title Section */}
            <div className="flex justify-center my-5 lg:py-4">
                <div className="flex items-center">
                    <span className="w-16 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md shadow-md">
                        Contributions
                    </span>
                    <span className="w-16 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col  lg:flex-row gap-12">
                {/* Contribution Graph */}
                <div className="flex flex-col w-full lg:w-2/3">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">Github Contribution Graph</h2>
                    <div className="flex gap-6">
                        {/* Graph Image */}
                        <div className="bg-white border border-[#a3a3a3] px-6 py-6 rounded-lg shadow-md">
                            {activeYear === '2024' && (
                                <img src="assets/images/2024contribution.png" alt="2024 Contribution Graph" className="w-full h-auto transition-all duration-300 ease-in-out" />
                            )}
                            {activeYear === '2023' && (
                                <img src="assets/images/2023contribution.png" alt="2023 Contribution Graph" className="w-full h-auto transition-all duration-300 ease-in-out" />
                            )}
                        </div>

                        {/* Year Selector Buttons */}
                        <div className="flex flex-col justify-center gap-4">
                            {['2024', '2023'].map((year) => (
                                <button
                                    key={year}
                                    className={`transition-colors p-2 px-4 rounded-md shadow-sm ${activeYear === year
                                        ? 'bg-[#1f9110] text-white'
                                        : 'bg-white border border-[#a3a3a3] hover:bg-gray-100'
                                        }`}
                                    onClick={() => setActiveYear(year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Enhanced Project Information Section */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Open Source Contribution</h2>

                    <div className="bg-white border border-[#a3a3a3] px-6 py-3 rounded-lg shadow-md max-w-lg mx-auto">

                        {/* Project Details */}
                        <div className="space-y-2 pb-2">
                            {/* Package Name */}
                            <div className="flex items-center justify-between py-3 border-b border-gray-300">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl text-blue-600">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.12 5H18.87L17.93 4H5.93L5.12 5ZM20.54 5.23C20.83 5.57 21 6 21 6.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V6.5C3 6 3.17 5.57 3.46 5.23L4.84 3.55C5.12 3.21 5.53 3 6 3H18C18.47 3 18.88 3.21 19.15 3.55L20.54 5.23ZM6 18H12V15H6V18Z" fill="black" />
                                        </svg>

                                    </span>
                                    <span className="text-sm font-medium text-gray-600">Package Name</span>
                                </div>
                                <span className="text-lg font-bold text-[#1f9110] ml-3">base64code-to-image</span>
                            </div>

                            {/* Published On */}
                            <div className="flex items-center justify-between py-3 border-b border-gray-300">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl text-green-600">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_11_14)">
                                                <path d="M1.763 0C0.786 0 0 0.786 0 1.763V22.237C0 23.214 0.786 24 1.763 24H22.237C23.214 24 24 23.214 24 22.237V1.763C24 0.786 23.214 0 22.237 0H1.763ZM5.13 5.323L18.967 5.342L18.958 19.178H15.494L15.504 8.796H12.048L12.04 19.17H5.113L5.13 5.323Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_11_14">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </span>
                                    <span className="text-sm font-medium text-gray-600">Published On</span>
                                </div>
                                <a
                                    href="https://www.npmjs.com/package/base64code-to-image"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-bold text-green-700 hover:underline"
                                >
                                    npmjs.com
                                </a>
                            </div>

                            {/* Current Version */}
                            <div className="flex items-center justify-between py-3 border-b border-gray-300">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl text-red-600">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 0H9C8.20435 0 7.44129 0.316071 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V13C6 13.7956 6.31607 14.5587 6.87868 15.1213C7.44129 15.6839 8.20435 16 9 16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM4 2C4.24493 2.00003 4.48134 2.08996 4.66437 2.25272C4.84741 2.41547 4.96434 2.63975 4.993 2.883L5 3V13C4.99972 13.2549 4.90212 13.5 4.72715 13.6854C4.55218 13.8707 4.31305 13.9822 4.05861 13.9972C3.80416 14.0121 3.55362 13.9293 3.35817 13.7657C3.16271 13.6021 3.0371 13.3701 3.007 13.117L3 13V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2ZM1 3C1.24493 3.00003 1.48134 3.08996 1.66437 3.25272C1.84741 3.41547 1.96434 3.63975 1.993 3.883L2 4V12C1.99972 12.2549 1.90212 12.5 1.72715 12.6854C1.55218 12.8707 1.31305 12.9822 1.05861 12.9972C0.804163 13.0121 0.553621 12.9293 0.358167 12.7657C0.162714 12.6021 0.0371036 12.3701 0.00699997 12.117L0 12V4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3Z" fill="black" />
                                        </svg>


                                    </span>
                                    <span className="text-sm font-medium text-gray-600">Current Version</span>
                                </div>
                                <span className="text-lg font-bold text-red-700">v1.0.2</span>
                            </div>

                            {/* GitHub Repository */}
                            <div className="flex items-center justify-between py-3 border-b border-gray-300">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl text-purple-600">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="black" />
                                        </svg>

                                    </span>
                                    <span className="text-sm font-medium text-gray-600">GitHub Repository</span>
                                </div>
                                <a
                                    href="https://github.com/Kalyanbikramadhikari/base64-to-image"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-bold text-green-700 hover:underline"
                                >
                                    View on GitHub
                                </a>
                            </div>

                            {/* License */}
                            <div className="flex items-center justify-between ">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl text-yellow-600">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 3H22C23.05 3 24 3.95 24 5V19C24 20.05 23.05 21 22 21H2C0.95 21 0 20.05 0 19V5C0 3.95 0.95 3 2 3ZM14 6V7H22V6H14ZM14 8V9H22V8H14ZM14 10V11H21V10H14ZM8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91ZM8 6C7.20435 6 6.44129 6.31607 5.87868 6.87868C5.31607 7.44129 5 8.20435 5 9C5 9.79565 5.31607 10.5587 5.87868 11.1213C6.44129 11.6839 7.20435 12 8 12C8.79565 12 9.55871 11.6839 10.1213 11.1213C10.6839 10.5587 11 9.79565 11 9C11 8.20435 10.6839 7.44129 10.1213 6.87868C9.55871 6.31607 8.79565 6 8 6Z" fill="black" />
                                        </svg>

                                    </span>
                                    <span className="text-sm font-medium text-gray-600">License</span>
                                </div>
                                <span className="text-lg font-bold text-green-700">ISC License</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="mt-6 flex justify-center gap-4">
                            <a
                                href="https://www.npmjs.com/package/base64code-to-image"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-200"
                            >
                                NPM Page
                            </a>
                            <a
                                href="https://github.com/Kalyanbikramadhikari/base64-to-image"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
                            >
                                GitHub Repo
                            </a>
                        </div> */}
                    </div>
                </div>




            </div >
        </div >
    );
};

export default Contributions;
