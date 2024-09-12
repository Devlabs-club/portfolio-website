import React from 'react'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from 'next/image'

function Main() {
  return (
    <div className='p-44 grid grid-cols-3'>
        <div className='flex flex-col gap-12 col-span-2'>
            <Heading>Hello, my name is Soham Daga.</Heading>
            <Paragraph>I am a technical director at Devlabs ASU.</Paragraph>
        </div>

        <Image className="h-96 w-full bg-gray-200" />
    </div>
  )
}

export default Main