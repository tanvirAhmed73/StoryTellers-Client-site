import React from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAudioBooks from "../../Hooks/useAudioBooks";

const CartMaking = ({ data }) => {
    const [addToCart, isLoading, refetch] = useAudioBooks()
  const {_id, brand, image_url, name, price } = data;
    const axiosSecure = UseAxiosSecure()
  const handleDelete =(_id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/addToCart/${_id}`)
          .then(res =>{
            if(res.data.deletedCount> 0){
              Swal.fire(
                        'Deleted!',
                        'Your book has been removed.',
                        'success'
                      )
                      refetch();
            }
          })
          
        }
      });
  }

  return (
    <div className="card w-full h-40 md:h-max card-side bg-base-100 shadow-xl">
      <figure className="mr-3">
        <img
          className="w-32  h-32 md:h-max lg:h-max"
          src={image_url}
          alt="book"
        />
      </figure>
      <div className="text-right lg:text-left mt-8 mr-3">
        <h2 className="text-green-600 font-bold">{name}</h2>
        <h2>CateGory: {brand}</h2>
        <h2>Price: ${price}</h2>

        <button
          className="btn h-[20px] btn-sm bg-green-600 text-white"
        >
          Buy Now
        </button>
        <button
        onClick={()=>handleDelete(_id)}
          className="btn h-[20px] btn-sm bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartMaking;
