// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const BooksMakingCard = ({ book, categoriesName }) => {
    
    if (categoriesName === book.category) {
      let id = book._id;
        return (
          
            <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center">
            <figure><img src={book.bookImage} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {book.bookName}
              </h2>
                <div className="badge badge-secondary ">{book.authorName}</div>
                <div className="badge badge-secondary">{book.category}</div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Rating {book.rating}</div>
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