import Image from 'next/image';
import React from 'react'
import netflixPic from '../public/assests/projects/netflixPic.png';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

function netflix() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' alt='/' src={netflixPic} />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Netflix Clone</h2>
                <h3>Next Js/ Tailwind / Firebase</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <h2 className='py-4'>Overview</h2>
                <p>
                    This app was built using Next Js and hosted using Vercel. Users are able to sign in and/or sign up which are authenticated using Firebase. On logging in, users can then choose a subscription plan which will then direct them to a stripe payment platform (test mode).
                    After payment using a stripe test card they will be redirected to the home page which displays movies fetched using APIs and on clicking this movies, a modal will be displayed showing the trailer of the respective movie. Subscriptions can also be cancelled.
                    Customers and products are handled using firebase. TypeScript was used to protect the platform from errors caused by undefined values. Please use this card number to test the app - 4242424242424242 and any date and cvc will work.
                </p>
                <a href="https://netflix-clone-hazel-one.vercel.app/" target='_blank' rel='noopener noreferrer'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Next Js</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Tailwind CSS</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Material UI</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Recoil</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />TypeScript</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Firebase</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Stripe</p>
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

export default netflix