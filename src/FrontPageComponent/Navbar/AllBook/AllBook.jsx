
import { useLoaderData } from "react-router-dom";
import AllBookCardMake from "./AllBookCardMake";
const AllBook = () => {
    const books = useLoaderData();
    return (
        <div>
            {
               <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                {books.map((book) => (
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