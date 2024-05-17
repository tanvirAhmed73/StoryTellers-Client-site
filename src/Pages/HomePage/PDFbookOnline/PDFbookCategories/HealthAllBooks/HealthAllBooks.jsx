import { useEffect, useState } from "react";
import BooksMakingCard from "../../booksMakingCard/BooksMakingCard";
import useBookLIsting from "../../../../../Hooks/useBookLIsting";
import SharedNAvbar from "../../../../../SharedItem/SharedNavbar/SharedNAvbar";
const HealthAllBooks = () => {
    const [bookListing, isLoading] =useBookLIsting()
    const categoriesName = "health";

    const [bookCard, setBookCard] = useState([])

    useEffect(()=>{
      const filterBook = bookListing.filter(entry => entry.category === "health");
      setBookCard(filterBook);
    },[bookListing])
    if(isLoading){
      return <p>"loading"</p>
    }

  return (
    <div>
      <SharedNAvbar></SharedNAvbar>
        <div className="mt-9 mb-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">
          {bookListing.map((book) => (
            <BooksMakingCard
              key={book._id}
              categoriesName={categoriesName}
              book={book}
            ></BooksMakingCard>
          ))}
        </div>
      



    </div>
  );
};

export default HealthAllBooks;