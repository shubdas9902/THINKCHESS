import React from 'react';
import "./CommunityPost.css"

const CommunityPost = () => {
  return (
    <div className=' bg-[#0D1117] flex justify-center items-center'>
      <div className='container mx-auto flex  justify-center items-center h-full px-4 pt-20'>
        <img 
          src='https://yt3.googleusercontent.com/ytc/AIdro_l666v73iXmmqRbSBif4VC80eZCn9_gRvvKWZH6mf5xCTM=s900-c-k-c0x00ffffff-no-rj' 
          className='img w-20 h-20 rounded-full mb-4 border-2 border-white' 
          alt='Community' 
        />
        <form className="max-w-sm w-full">
          <div className="mb-5">
            <label htmlFor="etitle" className="block mb-2 text-sm font-medium text-white">Title</label>
            <input 
              type="text" 
              id="etitle" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Title..." 
              required 
            />
          </div>
          <div className="mb-5">
            <label htmlFor="edescription" className="block mb-2 text-sm font-medium text-white">Post</label>
            <input 
              type="text" 
              id="edescription" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Get started..." 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Post
          </button>
        </form>
        {/* <hr className="w-full mt-4 border-t-2 border-white"/> */}
      </div>
    </div>
  );
}

export default CommunityPost;
