import React from 'react';
import AudioBookCard from './AudioBookCard';
;
const AudioBookOnline = () => {
    
    return (
        <div>
            {/* menu and button */}
            <div className='md:flex justify-between  items-center mx-7 mt-11'>
                <div>
                    <h1 className='text-2xl'>Audiobook's</h1>
                    <h2 className='text-xl text-green-600'>Online Store</h2>
                </div>
                {/* <NavLink to={'/allAudioBooks'}> */}
                    {/* <div className='btn btn-sm  bg-green-600 text-white'><CiHeadphones />All Audio Book's</div> */}
                {/* </NavLink> */}
                    
            </div>

            <AudioBookCard></AudioBookCard>

        </div>
    );
};

export default AudioBookOnline;