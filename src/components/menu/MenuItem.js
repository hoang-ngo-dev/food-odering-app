import React from 'react'

const MenuItem = () => {
    return (
        <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadwow-black/25 transition-all'>
            <div className='text-center'><img src="/pizza.png" className='max-h-auto max-h-24 block mx-auto' alt="pizza" /></div>
            <h4 className='font-semibold text-xl my-3'>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor</p>
            <button className=' mt-4 bg-primary text-white rounded-full px-8 -y-2'>Add to cart $12</button>
        </div>
    )
}

export default MenuItem