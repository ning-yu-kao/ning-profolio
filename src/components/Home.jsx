import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#262626] text-[#f2f2f2]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl text-gray-400'>LET'S BUILD FUTURE TOGETHER</p>
            <h1 className='text-4xl sm:text-7xl font-bold'>Hi, I'm <span className='text-[#f24c3d]'>Ning-Yu</span></h1>
            <h2 className='text-2xl sm:text-5xl font-bold'>An Artificial Intelligence Engineer.</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>I'm an AI engineer specializing in data science, deep leaning, and computer vision. 
                With my background of chemical engineering, my mission is to build the bridge between 
                <span className='font-bold text-gray-300'> chemical, physics, manufacturing</span> and 
                <span className='font-bold text-gray-300'> data</span>.</p>
            <div>
                <Link to='work'>
                    <button className='text-[#1f2937] bg-gray-300 group px-6 py-3 my-2 flex items-center hover:bg-[#f24c3d] hover:border-[#1f2937] hover:text-[#ecf0f3]'>View Recent Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home