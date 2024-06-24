import React from 'react';
import "./Header.css"; // Ensure this path is correct and points to your CSS file
import { Link } from 'react-router-dom';
import Description from './description';


const Home = () => {
  return (
    <div className='background flex items-center justify-center'>
      <div className="text-center text-white">
        <Link to="/" className='font-bold'>
          <span className='text-5xl md:text-8xl font-bold tracking-tight' style={{ color: '#28A745' }}>Think</span>
          <span className='text-white text-5xl md:text-8xl font-bold tracking-tight'>
          C<span style={{ transform: 'scaleX(-1)' }}>♘</span>ess
          </span>
        </Link>
        <div className='flex flex-wrap justify-center py-6 md:justify-evenly text-lg md:text-3xl font-bold tracking-tight'>
          <span className="gradient-text mx-4 my-1 md:mx-0" style={{ color: '#28A745' }}>
            Checks
          </span>
          <span className="gradient-text mx-4 my-1 md:mx-0">
            Captures
          </span>
          <span className="gradient-text mx-4 my-1 md:mx-0" style={{ color: '#28A745' }}>
            Threat
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
