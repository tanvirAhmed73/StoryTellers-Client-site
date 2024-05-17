import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";

const AudioBookCardMaking = ({data}) => {
  return (
    <div>
      <div>
        <div className="card mb-7 w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              src={data.image_url}
              alt="image"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">{data.name}</h2>
            <div className="card-actions flex justify-between">
              <h1 className="font-bold text-xl">${data.price}</h1>
              <button className="btn btn-sm bg-green-600 text-white">
                <IoBagHandleOutline /> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBookCardMaking;
