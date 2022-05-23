import React from 'react'
import MedScan from '../assets/medscan.png'
import ProTein from '../assets/protein.jpeg'
import StockImg from '../assets/stockprice.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#f2f2f2] text-[#1f2937]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-10'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#1f2937] border-[#a61c1c]'>Projects</p>
                <p className='py-6 text-xl'>Please check out my recent projects</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Gird item */}
                <div style={{ backgroundImage: `url(${StockImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Stock Price Prediciton
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href='https://github.com/ning-yu-kao/Tesla_stock_prediction'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>      
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${ProTein})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* hover effect */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Graph Convolutinal Network(GCN) - Protein Interaction Prediction
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/@kaoningyu/introduction-of-graph-convolutional-network-gcn-quick-implementation-5dd75e75b261'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Article</button>
                            </a>
                            <a href='https://github.com/ning-yu-kao/GCN_quick_implement'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>      
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${MedScan})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            U-Net - Medical Scan Segmentation
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href='https://github.com/ning-yu-kao/Med_scan_img_seg_unet'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>      
                    </div>
                </div>
                <div>
                    <a href='https://github.com/ning-yu-kao'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>View more projects on GitHub...</p>
                    </a>
                </div>
                {/* <div style={{ backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>      
                    </div>
                </div> */}
                {/* <div style={{ backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>      
                    </div>
                </div> */}
                {/* <div style={{ backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>      
                    </div>
                </div> */}
            </div>
        </div>
        
    </div>
  )
}

export default Work