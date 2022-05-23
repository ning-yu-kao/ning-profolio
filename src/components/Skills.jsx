import React from 'react';

import Python from '../assets/python.png';
import Tensorflow from '../assets/tensorflow.png';
import Scikit from '../assets/scikit.png';
import ReactImg from '../assets/react.png';
import Opencv from '../assets/opencv2.png';
import PYTORCH from '../assets/pytorch.png';
import Pandas from '../assets/pandas.png';
import Postgre from '../assets/postgresql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f2f2f2] text-[#1f2937]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#a61c1c] '>Skills</p>
              <p className='py-2 text-xl'>These tools and frameworks are the technologies I'm fruequetly using</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center bottom-20'>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={Python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={Tensorflow} alt="HTML icon" />
                  <p className='my-4'>Tensorflow</p>
              </div>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={Scikit} alt="HTML icon" />
                  <p className='my-4'>Scikit-learn</p>
              </div>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={PYTORCH} alt="HTML icon" />
                  <p className='my-4'>Pytorch</p>
              </div>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={Pandas} alt="HTML icon" />
                  <p className='my-4'>Pandas</p>
              </div>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={Opencv} alt="HTML icon" />
                  <p className='my-4'>OpenCV</p>
              </div>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={Postgre} alt="HTML icon" />
                  <p className='my-4'>PostgreSQL</p>
              </div>
              <div className='rounded-lg font-bold bg-[#fbfbfb] hover:bg-[#262626]/20 hover:text-[#ffffff] shadow-[#040c16]  hover:scale-110  duration-500'>
                  <img className='w-20 h-20 mx-auto my-4' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
