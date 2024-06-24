import React from 'react';
import './description.css';
import { Link } from 'react-router-dom';

const Description = () => {
    return (
        <div className='h-96 bground'>
            <div className='container flex mt-10'>
                <div className="relative flex bg-clip-border rounded-xl text-gray-700 shadow-md w-full max-w-[48rem] flex-row" style={{backgroundColor:"#0D1117"}}>
                    <div
                        className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img
                            src="https://gamesver.com/wp-content/uploads/2019/09/Kids-play-chess-during-chess-competition.jpg"
                            alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <h6
                            className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white uppercase">
                            Community
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-yellow-50">
                        <span style={{ color: '#28A745' }}>Think</span>Chess Community
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
                        ThinkChess: A vibrant chess community for discussions and collaborative problem-solving.
                        Join us to share strategies and deepen your passion for the game!
                        </p>
                        <Link to="/" className="inline-block"><button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                            type="button">
                            Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
