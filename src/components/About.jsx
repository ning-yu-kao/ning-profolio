import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f2f2f2] text-[#1f2937]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a61c1c]'>About</p>
                </div>
                <div> 
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold '>
                    <p>Hi, I'm Ning-Yu, nice to meet you! Here's my short story.</p>
                </div>
                <div>
                    <p className='text-gray-700 py-2'>
                        I graduated with a bachelor's and master's degree in Chemical Engineering. And now, I became an AI Engineer.
                        The journay of coding started when I was a graduate student at Carnegie Mellon University(CMU). 
                        Immersed in an environment filled with code at CMU, I was fascinated with how intricate programming can be and was quickly drawn 
                        to learn more.
                    </p>
                    <p className='text-gray-700 py-2'>
                        I started from chemical reaction simulation to data science and machine learning. I also worked as a Graduate Student Researcher, 
                        developing projects applying machine learning in additive manufacturing. In addition, I had an internship in a startup company 
                        as Machine Learning Engineer Intern. Currently, I'm an AI Engineer in a global manufacturing company.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About