
import AddToCardMaking from "./AddToCardMaking";
import UseBorrow from "../../Hooks/UseBorrow";
import UseAuth from "../../Hooks/UseAuth";
const BorrowedBooks = () => {

  const [borrow] = UseBorrow();
  const {user} = UseAuth()
  
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