import { useEffect, useState } from "react";
import BooksMakingCard from "../booksMakingCard/BooksMakingCard";
import useBookLIsting from "../../../Hooks/useBookLIsting";

const ComputerAllBooks = () => {
    const [bookListing] = useBookLIsting();
    const categoriesName = "computer";

    const [computerCard, setComputerCard] = useState([])

    useEffect(()=>{
      const filterComputer = bookListing.filter(entry => entry.category === "computer");
      setComputerCard(filterComputer);
    },[bookListing])

  return (
    <div>

      {
      computerCard.length > 0 ? (
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

export default ComputerAllBooks;