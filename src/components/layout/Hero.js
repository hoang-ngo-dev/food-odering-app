import React from 'react'
import Image from 'next/image'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='grid grid-cols-2'>
        <div>
        <h1 className='text-4xl font-semibold'>Everything is better with a Pizza
        </h1>
        <p className='my-4 text-gray-500'>Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life </p>
        <div className='flex gap-4'>
            <button className='bg-primary uppercase flex items-center text-white px-4 py-2 rounded-full text-sm'>Order now <Right/></button>
            <button className='flex gap-2 py-2 text-gray-600'>Learn more</button>
        </div>
        </div>
        <div className='relative'> <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'}/></div>
       
    </section>
  )
}

export default Hero