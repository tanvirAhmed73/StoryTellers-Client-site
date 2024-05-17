import { useEffect, useState } from "react";
import useBookLIsting from "../../../../../Hooks/useBookLIsting";
import BooksMakingCard from "../../booksMakingCard/BooksMakingCard";
import SharedNAvbar from "../../../../../SharedItem/SharedNavbar/SharedNAvbar";

const BussinessAllBooks = () => {

    const [bookListing, isLoading] = useBookLIsting();
    const categoriesName = "business";

    const [businessCard, setBusinessCard] = useState([])

    

    useEffect(()=>{
      const filterBusiness = bookListing.filter(entry => entry.category === "business");
      setBusinessCard(filterBusiness);
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

export default BussinessAllBooks;