

import Swal from "sweetalert2";

const AddBook = () => {



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

   
    // send data to the server
    fetch(
      "http://localhost:5000/book",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
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
                  className="mt-3 p-3"
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
                  placeholder="example - Novel, Thriller, History, Drama, Sci-Fi"
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
                <button className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
