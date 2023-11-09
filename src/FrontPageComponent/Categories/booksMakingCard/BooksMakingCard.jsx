// import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from 'react-icons/ai';

const BooksMakingCard = ({ book, categoriesName }) => {
  const [rating, setRating] = useState(book.rating || 0);

  if (categoriesName === book.category) {
    let id = book._id;
    return (
      <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center">
        <figure>
          <img src={book.bookImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <div className="badge badge-secondary ">{book.authorName}</div>
          <div className="badge badge-secondary">{book.category}</div>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Rating {book.rating}</div> */}
            {/* React Rating Component */}
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
          <button className="btn block mx-auto w-full">Details</button>
        </Link>
        {/* <Link to={`/updateproduct/${id}`}>
              <button className="btn block mx-auto w-full mt-4">Update Now!</button>
              </Link> */}
      </div>
    );
  }
};

export default BooksMakingCard;
