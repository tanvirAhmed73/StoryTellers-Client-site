import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BooksMakingCard from "../booksMakingCard/BooksMakingCard";

const BussinessAllBooks = () => {

    const books = useLoaderData();
    const categoriesName = "business";

    const [businessCard, setBusinessCard] = useState([])

    useEffect(()=>{
      const filterBusiness = books.filter(entry => entry.category === "business");
      setBusinessCard(filterBusiness);
    },[books])

  return (
    <div>

      {
      businessCard.length > 0 ? (
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

export default BussinessAllBooks;