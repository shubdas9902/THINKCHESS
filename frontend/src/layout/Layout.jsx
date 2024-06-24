import React from 'react'
import Home from '../Components/Header'
import Description from '../Components/description'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Home/>
        <Description/>
    </div>
  )
}

export default Layout