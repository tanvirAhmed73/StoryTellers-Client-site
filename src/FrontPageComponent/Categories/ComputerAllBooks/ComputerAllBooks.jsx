import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BooksMakingCard from "../booksMakingCard/BooksMakingCard";

const ComputerAllBooks = () => {
    const books = useLoaderData();
    const categoriesName = "computer";

    const [computerCard, setComputerCard] = useState([])

    useEffect(()=>{
      const filterComputer = books.filter(entry => entry.category === "computer");
      setComputerCard(filterComputer);
    },[books])

  return (
    <div>

      {
      computerCard.length > 0 ? (
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

export default ComputerAllBooks;