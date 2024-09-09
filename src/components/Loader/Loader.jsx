import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-bg-main">
        <div className="flex justify-center items-center h-screen">
          <div className="rounded-full h-20 w-20 bg-gray-700 animate-ping relative  flex justify-center items-center">
            <Image
            src="/education.svg"
             width={50}
             height={50}
             alt='error'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
