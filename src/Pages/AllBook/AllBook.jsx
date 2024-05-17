
// import { useLoaderData } from "react-router-dom";

import AllBookCardMake from "./AllBookCardMake";
import useBookLIsting from "../../Hooks/useBookLIsting";
import { useState } from "react";
const AllBook = () => {

    const [bookListing] = useBookLIsting();
    console.log(bookListing)
    // const [filteredCategory, setFilteredCategory] = useState(null);
    const [showAllBooks, setShowAllBooks] = useState(true);

    const handleFilter = () => {
        setShowAllBooks(!showAllBooks); // Toggle between showing all books and only available books
      };

      const filteredBooks = showAllBooks
    ? bookListing
    : bookListing.filter((book) => book.quantityOfTheBook > 0);

    return (
        <div>
            {/* Filter button */}
            <div className="mb-4 text-center">
                <button
                className="btn btn-primary"
                onClick={() => handleFilter(null)}
                >
                {showAllBooks ? "Show Available Books" : "Show All Books"}
                </button>
            </div>

      <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredBooks.map((book) => (
          <AllBookCardMake key={book._id} book={book}></AllBookCardMake>
        ))}
      </div>
    </div>
      );
};

export default AllBook;