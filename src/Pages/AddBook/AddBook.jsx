


import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const AddBook = () => {
  const axiosSecure = UseAxiosSecure()


    // add new book event handle button
  const handleAddBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const bookImage = form.bookImage.value;
    const quantityOfTheBook = form.quantityOfTheBook.value;
    const description = form.description.value;
    const category = form.category.value;
    const rating = form.rating.value;

    const newBook = {
      bookName,
      authorName,
      bookImage,
      quantityOfTheBook,
      description,
      category,
      rating,
    };

    axiosSecure.post('/book', newBook)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book added successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
    
    
    
  };

  return (
    <div>
      <div className="mt-6 mb-6 min-h-screen bg-base-200">
        <div className="mx-auto justify-center">
          <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100">
            {/* form */}
            <form
              onSubmit={handleAddBook}
              className=" mx-auto justify-between lg:p-11 lg:grid lg:grid-cols-2 gap-7 w-max"
            >
              {/* Book Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Book-Name"
                  name="bookName"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Author Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Author-Name"
                  name="authorName"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* book Image url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Image Url</span>
                </label>
                <input
                  type="text"
                  name="bookImage"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Quantity Of the Book */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity Of the Book</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity Of the Book"
                  name="quantityOfTheBook"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Short description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <textarea
                  className="mt-3 p-3 input input-bordered"
                  name="description"
                  rows="1"
                  cols="50"
                  placeholder="Write a Short Description"
                ></textarea>
              </div>

              {/* catagories-type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="example - health,computer,science,business,e.t.c"
                  className="input input-bordered"
                />
              </div>

              {/* Rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                />
              </div>

              {/* Add book */}
              <div className="form-control lg:mt-9">
                <button className="btn bg-green-600 text-white">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
