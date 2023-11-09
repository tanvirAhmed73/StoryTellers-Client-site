import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
import AddToCardMaking from "./AddToCardMaking";
const BorrowedBooks = () => {
    const book = useLoaderData();
    // const [withAddToBorrow, setwithAddToBorrow] = useState([])

    
    // useEffect(()=>{
    //   const withBorrow = book.filter(entry => entry.addBorrow);
    //   setwithAddToBorrow(withBorrow);
    // },[book])
    return (
        // making add to cart card
        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {book.map((addBook) => (
          <AddToCardMaking
            key={addBook._id}
            addBook={addBook}
          ></AddToCardMaking>
        ))}
      </div>
    );
};
export default BorrowedBooks;