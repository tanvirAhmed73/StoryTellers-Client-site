
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Provider/AuthProvider";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

// import Book1 from "../../../BookPageRead/BussinessBook/Book1";
// import { NavLink } from "react-router-dom";
const DetailsCardMake = ({data}) => {

  const axiosSecure = UseAxiosSecure();

    const {bookName, authorName, bookImage, quantityOfTheBook, description, category, rating} =data;
    
    let id = data._id;
    const {user} = useContext(AuthContext);
    const{displayName, email} = user;


    const handleBorrowButtonClick = (e,) =>{
      e.preventDefault();
      const form = e.target;
      const currentLoggerName = form.name.value;
      const currentLoggerEmail = form.email.value;
      
      const returnDate = form.returnDate.value;
      // Close the modal after submitting the form
      const modal = document.getElementById('my_modal_5');
      if (modal) {
        modal.close();
      }
      handleBorrowButtonClickTwo(returnDate,currentLoggerName,currentLoggerEmail)
    }

  const handleBorrowButtonClickTwo = (returnDate,currentLoggerName,currentLoggerEmail)=>{
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1.
    const year = currentDate.getFullYear();
    const addingDate = `${day}/${month}/${year}`

    const bookname = bookName;
    const authorname = authorName;
    const bookimage = bookImage;
    const descripTion = description;
    const cateGory = category;
    const raTing = rating;

    const borrowBook = {
      bookname,
      authorname,
      bookimage,
      descripTion,
      cateGory,
      raTing,
      returnDate,
      currentLoggerName,
      currentLoggerEmail,
      addingDate,
    };

    const quantity= quantityOfTheBook-1
    // send data to the server
    // fetch(
    //   "https://story-tellers-server-site-code.vercel.app/addborrow",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(borrowBook),
    //   }
    // )
    axiosSecure.post('/addborrow',borrowBook)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Borrow successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          axiosSecure.patch(`/book/${data._id}`,{quantity})
          .then(resQuantity =>{
            if(resQuantity.data.modifiedCount > 0){
              window.location.reload();
            }
            
        })
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
          <div>Quantity Of The Book : 0{quantityOfTheBook}</div>
        </div>
        
        <div className="flex pb-6">

                <div>
                  {
                    quantityOfTheBook>0 ?
                    <button className="btn block btn-success" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    :
                    <button className="btn block btn-success " disabled ={true}>Borrow</button>

                  }
                    {/* <button className="btn block btn-success" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button> */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Return date</h3>
                        

                        <div className="modal-action">
                          <form onSubmit={handleBorrowButtonClick} method="dialog">
                            <input className="input input-bordered mr-2" type="text" name="name" defaultValue={displayName}/>
                            <input className="input input-bordered" type="email" name="email" defaultValue={email}/>
                            <input className="input input-bordered mt-3 mr-2" type="date" name="returnDate" required/>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Submit</button>
                          </form>
                        </div>
                      </div>
                  </dialog>
              </div>

              <Link to={`/read/${id}`}>
                <button  className="btn ml-6 btn-success">Read</button>                     
              </Link>
        </div>
      
      </div>
    </div>
  );
};

export default DetailsCardMake;