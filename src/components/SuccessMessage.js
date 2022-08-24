import React from 'react'

export default function SuccessMessage({setCurrentPage}) {
  return (
    <div className=' z-50 absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
      <div className=' items-center justify-center flex flex-col space-y-4 w-[300px] md:w-[600px] bg-white rounded-lg px-6 md:p-9 py-4 text-black text-center'>
        <p className=' md:text-lg'>You've Successfully signed up for an account with us. We've sent a verification link to your email address. Use the link to sigin to your account. </p>
        <button onClick={()=> setCurrentPage(1)} className=' bg-blue-600 inline-block w-min py-3 px-4 rounded-md'>Close</button>
      </div>
    </div>
  )
}
