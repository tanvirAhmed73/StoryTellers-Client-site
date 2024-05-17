import React from 'react';
import AudioBookCard from './AudioBookCard';
import { CiHeadphones } from "react-icons/ci";
const AudioBookOnline = () => {
    return (
        <div>
            {/* menu and button */}
            <div className='md:flex justify-between  items-center mx-7 mt-11'>
                <div>
                    <h1 className='text-2xl'>Audiobook's</h1>
                    <h2 className='text-xl text-green-600'>Online Store</h2>
                </div>
                <button className='btn btn-sm  bg-green-600 text-white'><CiHeadphones />All Audio Book's</button>
                    
            </div>

            <AudioBookCard></AudioBookCard>

        </div>
    );
};

export default AudioBookOnline;