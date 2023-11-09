
// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import AllBookCardMake from "./AllBookCardMake";
import { useEffect, useState } from "react";
const AllBook = () => {

    const [allBook, setAllBook] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/book",{withCredentials:true})
        .then((res)=> setAllBook(res.data))
    },[allBook])
    return (
        <div>
            {
               <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                {allBook.map((book) => (
                    <AllBookCardMake
                    key={book._id}
                    book={book}
                    ></AllBookCardMake>
                ))}
                </div> 
            }
    
          
         
    
    
        </div>
      );
};

export default AllBook;