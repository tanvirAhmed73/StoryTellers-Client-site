import { Link } from "react-router-dom";
import { AiTwotoneStar } from 'react-icons/ai';
import Rating from "react-rating";

const AllBookCardMake = ({book}) => {
    const {_id, bookName, authorName, bookImage, quantityOfTheBook, description, category, rating} =book;
    let id = book._id;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center">
            <figure><img src={bookImage} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {bookName}
              </h2>
                <div className="badge badge-secondary ">{authorName}</div>
                <div className="badge badge-secondary">{category}</div>
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
              <button className="btn block bg-green-600 text-white mx-auto w-full mt-4">Detail's</button>
            </Link>
            {/* <Link to={`/updateproduct/${id}`}>
              <button className="btn block mx-auto w-full mt-4">Update Now!</button>
            </Link> */}

          </div>
        </div>
    );
};

export default AllBookCardMake;