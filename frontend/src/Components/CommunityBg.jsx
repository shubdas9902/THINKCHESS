import React from 'react'
import "./CommunityBg.css"

const CommunityBg = () => {
  return (
    <div className='parent-container'>
    <div className='commbackground flex items-center justify-center'>
        <div className="text-center text-white">
        <div className='font-bold flex flex-col'>
        <span className='text-white text-5xl md:text-8xl font-bold tracking-tight'>
            Welcome To
          </span>
          <span className='text-5xl md:text-8xl font-bold tracking-tight pt-2' style={{ color: '#28A745' }}>Think
          <span className='text-white text-5xl md:text-8xl font-bold tracking-tight'>
          C<span style={{ transform: 'scaleX(-1)' }}>♘</span>ess
          </span></span>
        </div>
        <div className='flex flex-wrap justify-center py-6 md:justify-evenly text-lg md:text-7xl font-bold tracking-tight'>
           Community
        </div>
      </div>
    
    </div></div>
  )
}

export default CommunityBg