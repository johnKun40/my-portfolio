import Image from 'next/image';
import React from 'react'
import netflixPic from '../public/assests/projects/whatsappPic.png';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

function whatsapp() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' alt='/' src={netflixPic} />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Chat App</h2>
                <h3>React Js/ Redux / Firebase</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <h2 className='py-4'>Overview</h2>
                <p>
                    This app was built using React JS and hosted using Firebase. Users can log in using their gmail accounts and can have 1 to 1 conversations with other users. Users can also create other rooms to speak to other users. It fetches chats and time stamps from firebase and displays it dynamically.
                </p>
                <a href="https://whatsapp-clone-ab45.firebaseapp.com/" target='_blank' rel='noopener noreferrer'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />React Js</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Redux</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />React Icons</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Firebase</p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer py-6'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default whatsapp