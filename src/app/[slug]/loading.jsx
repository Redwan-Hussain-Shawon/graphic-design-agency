import React from 'react'

export default function Loading() {
  return (
    <div className='py-16 px-4'>
          <div className="container">
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-7'>
          {['','','','','','',''].map((item)=>(
            <div>
            <div className='w-full bg-gray-200 animate-pulse rounded-sm h-[200px]'></div>
            <div className='w-[80%] bg-gray-200 animate-pulse rounded-sm h-5 mt-3'></div>
            <div className='w-[60%] bg-gray-200 animate-pulse rounded-sm h-4 mt-3'></div>
            </div>
            ))}
        </div>
        </div></div>
  )
}