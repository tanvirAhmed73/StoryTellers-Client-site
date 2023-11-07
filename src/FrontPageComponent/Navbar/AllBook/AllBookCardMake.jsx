import { Link } from "react-router-dom";

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
                <div className="badge badge-outline">Rating {rating}</div>
              </div>
            </div>
    
            <Link to={`/updateproduct/${id}`}>
              <button className="btn block mx-auto w-full mt-4">Update Now!</button>
            </Link>

          </div>
        </div>
    );
};

export default AllBookCardMake;