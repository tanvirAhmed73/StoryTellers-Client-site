
// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import AllBookCardMake from "./AllBookCardMake";
import { useEffect, useState } from "react";
const AllBook = () => {

    const [allBook, setAllBook] = useState([])

    useEffect(()=>{
        axios.get("https://project-eleven-server-site-cokjhjmwt-tanvirs-projects-23a7939e.vercel.app/book")
        .then((res)=> setAllBook(res.data))
    },[allBook])
    console.log(allBook);
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