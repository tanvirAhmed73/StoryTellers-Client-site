// import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from 'react-icons/ai';

const BooksMakingCard = ({ book, categoriesName }) => {

  if (categoriesName === book.category) {
    let id = book._id;
    return (
      <div className="card w-full md:w-80 bg-base-100 shadow-xl mx-auto justify-center">
        <figure>
          <img src={book.bookImage} alt="books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <div><span  className="underline">Author Name:</span> {book.authorName}</div>
          <div className="badge bg-green-600">{book.category}</div>
          <div className="card-actions justify-end">
            
            <Rating
              initialRating={book.rating}
              emptySymbol={<AiTwotoneStar style={{color: "#ffea00",}} />}
              fullSymbol={<AiTwotoneStar style={{color: "#ffea00",}} />}
              readonly={true} // Set to true to make it read-only
            />
            <p>Rating: {book.rating}</p>
          </div>
        </div>

        <Link to={`/details/${id}`}>
          <button className="btn block bg-green-600 text-white mx-auto w-full">Details</button>
        </Link>
        
      </div>
    );
  }
};

export default BooksMakingCard;
