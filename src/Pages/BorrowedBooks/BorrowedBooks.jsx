
import AddToCardMaking from "./AddToCardMaking";
import UseBorrow from "../../Hooks/UseBorrow";
import UseAuth from "../../Hooks/UseAuth";
import SharedNAvbar from "../../SharedItem/SharedNavbar/SharedNAvbar";
const BorrowedBooks = () => {

  const [borrow] = UseBorrow();
  const {user} = UseAuth()
  
    const filteredData = borrow.filter((book) => book.currentLoggerEmail === user.email);
    return (
      <div>
        <SharedNAvbar></SharedNAvbar>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {filteredData.map((addBook) => (
          <AddToCardMaking
            key={addBook._id}
            addBook={addBook}
          ></AddToCardMaking>
        ))}
      </div>
      </div>
    );
};
export default BorrowedBooks;