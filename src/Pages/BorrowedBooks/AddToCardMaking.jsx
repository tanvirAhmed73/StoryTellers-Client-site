
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseBorrow from "../../Hooks/UseBorrow";

// import Swal from "sweetalert2";
const AddToCardMaking = ({addBook}) => {
    const {
        _id,
        bookName,
        authorName,
        bookImage,
        quantityOftheBook,
        descripTion,
        category,
        raTing,
        returnDate,
        addingDate,
      } = addBook

      const [borrow, refetch] = UseBorrow()
      const axiosSecure = UseAxiosSecure();
      const handleDelete = (addBook) => {
        
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
            axiosSecure.delete(`/addborrow/${addBook._id}`)
            .then(res =>{
              if(res.data.deletedCount> 0){
                Swal.fire(
                          'Deleted!',
                          'Your book has been removed.',
                          'success'
                        )
                        refetch();
              }
            })
            
          }
        });
      };

      const handleReadBook = ()=>{
        const bookPDFurl = "https://drive.google.com/file/d/1vXpEuvAsfhOLfipk-zJq49PUNMVk0fRM/view?usp=sharing"
        window.open(bookPDFurl, '_blank')
       }

    return (
        <div className="card w-full h-40 md:h-max card-side bg-base-100 shadow-xl">
        <figure className="mr-3">
            <img
            className="w-32  h-32 md:h-max lg:h-max"
            src={bookImage}
            alt="book"
            />
        </figure>
        <div className="text-right lg:text-left mt-8 mr-3">
            <h2 className="text-green-600 font-bold">{bookName}</h2>
            <h2>CateGory: {category}</h2>
            
            <button onClick={handleReadBook}  className="btn h-[20px] btn-sm bg-green-600 text-white">Read</button>
            <button onClick={() => handleDelete(addBook)} className="btn h-[20px] btn-sm bg-red-600 text-white">Delete</button>
        </div>
        </div>
    );
};

export default AddToCardMaking;