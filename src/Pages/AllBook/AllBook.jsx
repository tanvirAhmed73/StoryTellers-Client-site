
// import { useLoaderData } from "react-router-dom";

import AllBookCardMake from "./AllBookCardMake";
import useBookLIsting from "../../Hooks/useBookLIsting";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const AllBook = () => {

    const [bookListing] = useBookLIsting();    

    return (
        <div>
            
            <div className="mb-4 text-center">
              <NavLink to={'/addBook'}>
                  <button
                  className="btn bg-green-600 text-white"
                  >
                  Share Your Book
                  </button>
              </NavLink>
              <p className="text-gray-500"><span className="font-bold">Instruction</span> : If You Are A Writer Then You Can Share Your Book Free.</p>
            </div>

      <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {
        bookListing.map((book) => (
          <AllBookCardMake key={book._id} book={book}></AllBookCardMake>
        ))
        }
      </div>
    </div>
      );
};

export default AllBook;