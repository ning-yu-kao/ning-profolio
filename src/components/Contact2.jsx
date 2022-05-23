import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Myself from '../assets/head.png'

const Contact2 = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#262626] text-[#f2f2f2] flex justify-center items-center p-4'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-4xl font-bold inline border-b-4 border-[#a61c1c]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={Myself}
                  alt='/'
                  style={{ height: '270px', width: '220px'}}
                />
              </div>
              <div>
                <h2 className='py-2 text-xl font-bold'>Ning-Yu Kao</h2>
                <p className='font-medium'>AI Engineer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Feel free to contact me and discuss further.
                </p>
              </div>
              <div>
                <p className='text-[#f24c3d] font-medium uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a href='https://www.linkedin.com/in/kaoningyupage/'>
                    <div className='bg-gray-500 rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin />
                    </div>
                  </a>
                  <a href='https://github.com/ning-yu-kao'> 
                    <div className='bg-gray-500 rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                  </a>
                  <a href='mailto:nkao@andrew.cmu.edu'> 
                    <div className='bg-gray-500 rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                  </a>
                  <a href='https://medium.com/@kaoningyu'>
                    <div className='bg-gray-500 rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaMedium />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto rounded-xl lg:p-4'>
            <p className='ml-5'>Sent a message to me ▼</p>  
            <div className='p-4'>
              <form method='POST' action='https://getform.io/f/36af10a7-568e-4a9d-9f94-9c5d1136a1c6'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col text-[#262626]'>
                    {/* <label className='uppercase text-sm py-2'>Name</label> */}
                    <input
                      className='caret-[#262626] bg-gray-300 border-2 rounded-lg p-3 flex border-gray-300'
                      type='text' placeholder='Name' name='name'
                    />
                  </div>
                  <div className='flex flex-col text-[#262626]'>
                    {/* <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label> */}
                    <input
                      className='bg-gray-300 border-2 rounded-lg p-3 flex border-gray-300'
                      type='text' placeholder='Phone Number' name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2 text-[#262626]'>
                  {/* <label className='uppercase text-sm py-2'>Email</label> */}
                  <input
                    className='bg-gray-300 border-2 rounded-lg p-3 flex border-gray-300'
                    type='email' placeholder='email' name='email'
                  />
                </div>
                <div className='flex flex-col py-2 text-[#262626]'>
                  {/* <label className='uppercase text-sm py-2'>Subject</label> */}
                  <input
                    className='bg-gray-300 border-2 rounded-lg p-3 flex border-gray-300'
                    type='text' placeholder='Subject' name='subject'
                  />
                </div>
                <div className='flex flex-col py-2 text-[#262626]'>
                  {/* <label className='uppercase text-sm py-2'>Message</label> */}
                  <textarea className='bg-gray-300 border-2 rounded-lg p-3 border-gray-300' rows='10' placeholder='Message' name='message'></textarea>
                </div>
                <button className='font-bold rounded-lg w-full p-4 text-gray-300 mt-4 hover:text-[#f24c3d] hover:border-2 hover:border-[#f24c3d]'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link to="home" smooth={true} duration={500}>
            <div className='rounded-full hover:bg-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#f24c3d]' size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact2