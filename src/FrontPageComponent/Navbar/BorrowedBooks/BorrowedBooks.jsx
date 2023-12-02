// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
import AddToCardMaking from "./AddToCardMaking";
import UseBorrow from "../../../Hooks/UseBorrow";
// import { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
const BorrowedBooks = () => {

  const [borrow] = UseBorrow();
  const {user} = UseAuth()
  // const [filteredData, setFilterData] = useState([]);

  // useEffect(() => {
  //   filterData(borrow, user.email);
  // }, [borrow, user.email]);
  // const filterData = (data, email) => {
  //   const filtered = data.filter((book) => book.currentLoggerEmail === email);
  //   setFilterData(filtered);

  // }
    // const book = useLoaderData();
    // const [withAddToBorrow, setwithAddToBorrow] = useState([])

    // useEffect(()=>{
    //   const withBorrow = book.filter(entry => entry.addBorrow);
    //   setwithAddToBorrow(withBorrow);
    // },[book])
    const filteredData = borrow.filter((book) => book.currentLoggerEmail === user.email);
    return (
        // making add to cart card
        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {filteredData.map((addBook) => (
          <AddToCardMaking
            key={addBook._id}
            addBook={addBook}
          ></AddToCardMaking>
        ))}
      </div>
    );
};
export default BorrowedBooks;