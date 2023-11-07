import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BooksMakingCard from "../booksMakingCard/BooksMakingCard";
const HealthAllBooks = () => {
    const books = useLoaderData();
    const categoriesName = "health";

    const [bookCard, setBookCard] = useState([])

    useEffect(()=>{
      const filterBook = books.filter(entry => entry.category === "health");
      setBookCard(filterBook);
    },[books])

  return (
    <div>

      {
      bookCard.length > 0 ? (
        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {books.map((book) => (
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

export default HealthAllBooks;