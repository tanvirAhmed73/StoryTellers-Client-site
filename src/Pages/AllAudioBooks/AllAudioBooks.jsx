import React from 'react';
import SharedNAvbar from '../../SharedItem/SharedNavbar/SharedNAvbar';
import useAudioBooks from '../../Hooks/useAudioBooks';
import AudioBooksCardMAking from '../HomePage/AudioBooksCardMAking';

const AllAudioBooks = () => {
    const [addToCart] = useAudioBooks()
    return (
        <div>
            <SharedNAvbar></SharedNAvbar>

            <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                addToCart.map((book) => (
                    <AudioBooksCardMAking key={book._id} book={book}></AudioBooksCardMAking>
                ))
                }
            </div>
        </div>
    );
};

export default AllAudioBooks;