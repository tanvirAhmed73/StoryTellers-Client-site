
import Swal from "sweetalert2";
import useBookLIsting from "../../../Hooks/useBookLIsting";
import { useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

// import Swal from "sweetalert2";
const AddToCardMaking = ({addBook}) => {
    const {
        _id,
        bookname,
        authorname,
        bookimage,
        quantityOftheBook,
        descripTion,
        cateGory,
        raTing,
        returnDate,
        addingDate,
      } = addBook

      const[bookListing,refetch]= useBookLIsting();
      const axiosSecure = UseAxiosSecure();
      // const [filerBook, setFilterBook] = useState();
      const handleDelete = (addBook) => {
        const filteredData = bookListing.filter((book) => book.bookName === addBook.bookname);
        const id= filteredData[0]._id;
        const quantity= filteredData[0].quantityOfTheBook + 1;
        console.log(quantity)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://story-tellers-server-site-code.vercel.app/addborrow/${addBook._id}`,{
              method : "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                  )
                  
                  axiosSecure.patch(`/book/${id}`,{quantity})
                  .then(resQuantity =>{
                    if(resQuantity.data.modifiedCount > 0){
                      console.log('quantity up')
                    }
                    window.location.reload();
                    
                })
                }
              });
          }
        });
      };

    return (
        <div className="card   card-side bg-base-100 shadow-xl">
        <figure>
            <img
            className="md:h-[200px] lg:h-[100px]"
            src={bookimage}
            alt="Movie"
            />
        </figure>
        <div className="card-body">
            <h2 className="text-lg">{bookname}</h2>
            <h2>CateGory: {cateGory}</h2>
            <h2>Borrowed Date: {addingDate}</h2>
            <h2>Return Date: {returnDate}</h2>
            <button onClick={() => handleDelete(addBook)} className="btn h-[20px] btn-primary">return Button</button>
            <div className="card-actions justify-end"></div>
        </div>
        </div>
    );
};

export default AddToCardMaking;