import { useEffect, useState } from "react";
import BooksMakingCard from "../booksMakingCard/BooksMakingCard";
import useBookLIsting from "../../../Hooks/useBookLIsting";
const ScienceAllBooks = () => {
    const [bookListing] = useBookLIsting();
    const categoriesName = "science";

    const [bookCard, setBookCard] = useState([])

    useEffect(()=>{
      const filterBook = bookListing.filter(entry => entry.category === "science");
      setBookCard(filterBook);
    },[bookListing])

  return (
    <div>

      {
      bookCard.length > 0 ? (
        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {bookListing.map((book) => (
            <BooksMakingCard
              key={book._id}
              categoriesName={categoriesName}
              book={book}
            ></BooksMakingCard>
          ))}
        </div>
      ) : (
        <div>
          <img
            className="w-full h-screen"
            src="https://evgracias.com/images/no-products.jpg"
            alt=""
          />
        </div>
      )
      }



    </div>
  );
};

export default ScienceAllBooks;