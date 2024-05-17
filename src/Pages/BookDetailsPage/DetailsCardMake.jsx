import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../src/Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuBookUp2 } from "react-icons/lu";
const DetailsCardMake = ({ data }) => {
  const axiosSecure = UseAxiosSecure();

  const {
    bookName,
    authorName,
    bookImage,
    quantityOfTheBook,
    description,
    category,
    rating,
  } = data;

  let id = data._id;
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const handleBorrowBooks =(data)=>{
    console.log(data)
  }

  return (
    <div className="w-full text-center mb-7">
      <div className=" mx-auto  md:flex bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full mb-7 md:w-3/4 mx-auto"
            src={bookImage}
            alt="Shoes"
          />
        </figure>
        <div className="md:text-right md:mr-10">
          <h2 className="font-bold text-xl mt-4 text-gray-400">Name: {bookName}</h2>
          <h1 className="font-bold mb-3 text-xl text-gray-400">Author Name : {authorName}</h1>
          <div className="">
            
            <Link to={`/read/${id}`}>
              <button className="btn btn-sm mb-3 bg-green-600 text-white">
                Read Summary
              </button>
            </Link>
            <button onClick={()=>handleBorrowBooks(data)} className="btn btn-sm mb-3 bg-green-600 text-white">
            <LuBookUp2 /> Borrow THE Book
            </button>
            <button className="btn btn-sm mb-3 bg-green-600 text-white">
              <IoBagHandleOutline /> Add To Compare
            </button>
          </div>

          {/* review */}
          <div className="text-left md:text-right mx-3 md:mx-0 mb-7">
            <p className="text-slate-400">
              There are no reviews for this product
            </p>
            <h1 className=" text-2xl">Write a review</h1>
            <div className="text-md text-slate-400">
              <span className="text-red-600">*</span>
              Your Name
              <input className="w-full input input-bordered" type="text" />
            </div>
            <div className="text-md text-slate-400">
              <span className="text-red-600">*</span>
              Your Review
              <br />
              <textarea className="w-full input input-bordered" type="text" />
            </div>
            <div className="text-md text-slate-400">
              <span className="text-red-600">*</span>
              rating
              <br />
              <div className="rating rating-md">
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <button className="btn bg-green-600 text-white mt-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCardMake;
