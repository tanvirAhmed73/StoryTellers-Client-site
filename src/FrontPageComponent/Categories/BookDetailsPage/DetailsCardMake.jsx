import { useState } from "react";
import Swal from "sweetalert2";
const DetailsCardMake = ({data}) => {

    const {_id, bookName, authorName, bookImage, quantityOfTheBook, description, category, rating} =data;
    let id = data._id;


    const handleBorrowButtonClick = (e) =>{
      e.preventDefault();
      const form = e.target;
      const returnDate = form.returnDate.value;
      // Close the modal after submitting the form
      const modal = document.getElementById('my_modal_5');
      if (modal) {
        modal.close();
      }
      handleBorrowButtonClicktwo(returnDate)
    }

  const handleBorrowButtonClicktwo = (returnDate)=>{
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1.
    const year = currentDate.getFullYear();
    const addingDate = `${day}/${month}/${year}`

    const bookname = bookName;
    const authorname = authorName;
    const bookimage = bookImage;
    const quantityOftheBook = quantityOfTheBook;
    const descripTion = description;
    const cateGory = category;
    const raTing = rating;

    const borrowBook = {
      bookname,
      authorname,
      bookimage,
      quantityOftheBook,
      descripTion,
      cateGory,
      raTing,
      returnDate,
      addingDate,
    };
    // send data to the server
    fetch(
      "http://localhost:5000/addborrow",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(borrowBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Borrow successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });


  
  }



  return (
    <div className="w-full">
      <div className=" w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={bookImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-6xl text-purple-700 ">
            {bookName}
            <div className="badge badge-secondary">special</div>
          </h2>
          <p className="italic">{description}</p>
          <div className="card-actions justify-end">
            <div className=" badge badge-outline">{category}</div>
          </div>
        </div>
        
        <div className="flex pb-6">

                <div>
                    <button className="btn block btn-success" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Return date</h3>
                        

                        <div className="modal-action">
                          <form onSubmit={handleBorrowButtonClick} method="dialog">
                            <input type="date" name="returnDate"/>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Submit</button>
                          </form>
                        </div>
                      </div>
                  </dialog>
              </div>
            <button  className="btn ml-6 btn-success">Read</button>                     
        </div>
        

        
        

      </div>
    </div>
  );
};

export default DetailsCardMake;