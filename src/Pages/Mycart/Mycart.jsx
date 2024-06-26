import React from 'react';
import useAudioBooks from '../../Hooks/useAudioBooks';
import UseAuth from '../../Hooks/UseAuth';
import SharedNAvbar from '../../SharedItem/SharedNavbar/SharedNAvbar';
import CartMaking from './CartMaking';
const Mycart = () => {
    const [addToCart, isLoading, refetch] = useAudioBooks()
    if(isLoading){
        return <p className='text-center text-2xl text-gray-400 mb-7'>Loading........</p>
    }
    return (
        <div>
            <SharedNAvbar></SharedNAvbar>
            <div className='mt-9 grid grid-cols-1 md:grid-cols-2 gap-10 '>
                {
                    addToCart?.length > 0 ?
                    addToCart.map(data => <CartMaking key={data._id} data={data}></CartMaking>)
                    :
                    <h1 className='text-center text-2xl text-gray-400 mb-7'>Your Cart is empty</h1>
                }
            </div>
        </div>
    );
};

export default Mycart;