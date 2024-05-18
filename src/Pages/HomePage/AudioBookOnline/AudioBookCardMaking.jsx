import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useAudioBooks from "../../../Hooks/useAudioBooks";
import { NavLink } from "react-router-dom";

const AudioBookCardMaking = ({ data }) => {
  const axiosSecure = UseAxiosSecure();
  const [addToCart, , refetch] = useAudioBooks();
  const { user } = UseAuth();
  const handleAddtoCart = (data) => {
    const addToCartData = {
      bookId: data._id,
      availability: data.availability,
      brand: data.brand,
      description: data.description,
      image_url: data.image_url,
      name: data.name,
      price: data.price,
      product_code: data.product_code,
      reward_points: data.reward_points,
      userEmail: user.email,
    };
    const isAlreadyBorrowed = addToCart.some(
      (cartBook) =>
        cartBook.bookId === addToCartData.bookId &&
        cartBook?.userEmail === addToCartData?.userEmail
    );
    if (!isAlreadyBorrowed) {
      axiosSecure.post("/addToCart", addToCartData).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book added to the cart succefully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Already Added The Book In The List!",
      });
    }
  };
  return (
    <div>
      <div>
        <div className="card mb-7 w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={data.image_url} alt="image" />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">{data.name}</h2>
            <div className="card-actions flex justify-between">
              <h1 className="font-bold text-xl">${data.price}</h1>
              {user ? (
                <button
                  onClick={() => handleAddtoCart(data)}
                  className="btn btn-sm bg-green-600 text-white"
                >
                  <IoBagHandleOutline /> Add To Cart
                </button>
              ) : (
                <NavLink to={'/login'}>
                  <button className="btn btn-sm bg-green-600 text-white">
                    <IoBagHandleOutline /> Add To Cart
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBookCardMaking;
