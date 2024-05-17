import React from 'react';
import AudioBookCard from './AudioBookCard';

const AudioBookOnline = () => {
    return (
        <div>
            {/* menu and button */}
            <div className='md:flex justify-between mx-7 mt-11'>
                <div>
                    <h1 className='text-2xl'>Audiobook's</h1>
                    <h2 className='text-xl text-green-600'>Online Store</h2>
                </div>
                <div className='grid grid-cols-3 justify-center items-center md:gap-10 '>
                    <button className='btn btn-xs bg-green-600 text-white'>Feature</button>
                    <button className='btn btn-xs bg-green-600 text-white'>Bestseller</button>
                    <button className='btn btn-xs bg-green-600 text-white'>Latest</button>
                </div>
            </div>

            <AudioBookCard></AudioBookCard>

        </div>
    );
};

export default AudioBookOnline;