import { AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const AllBookCardMake = ({ book }) => {
  const {
    _id,
    bookName,
    authorName,
    bookImage,
    quantityOfTheBook,
    description,
    category,
    rating,
  } = book;
  let id = book._id;

  return (
    <div className="p-4">
      {" "}
      {/* Add padding for mobile */}
      <div className="card w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-base-100 shadow-xl mx-auto justify-center">
        <figure>
          <img
            src={bookImage}
            alt="Book"
            className="w-full h-auto object-cover"
          />{" "}
          {/* Ensure image is responsive */}
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {bookName}
          </h2>
          <div className="badge badge-secondary">{authorName}</div>
          <div className="badge badge-secondary">{category}</div>
          <div className="card-actions justify-end mt-4">
            <Rating
              initialRating={book.rating}
              emptySymbol={<AiTwotoneStar style={{ color: "#ffea00" }} />}
              fullSymbol={<AiTwotoneStar style={{ color: "#ffea00" }} />}
              readonly={true} // Set to true to make it read-only
            />
            <p className="text-sm sm:text-base">Rating: {book.rating}</p>
          </div>
        </div>

        <Link to={`/details/${id}`}>
          <button className="btn block bg-green-600 text-white mx-auto w-full mt-4">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllBookCardMake;
