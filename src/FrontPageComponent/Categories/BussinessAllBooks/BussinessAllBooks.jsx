import { useEffect, useState } from "react";
import BooksMakingCard from "../booksMakingCard/BooksMakingCard";
import useBookLIsting from "../../../Hooks/useBookLIsting";

const BussinessAllBooks = () => {

    const [bookListing] = useBookLIsting();
    const categoriesName = "business";

    const [businessCard, setBusinessCard] = useState([])

    useEffect(()=>{
      const filterBusiness = bookListing.filter(entry => entry.category === "business");
      setBusinessCard(filterBusiness);
    },[bookListing])

  return (
    <div>

      {
      businessCard.length > 0 ? (
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

export default BussinessAllBooks;