import Swal from "sweetalert2";

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

      const handleDelete = (_id) => {
        console.log(_id);
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
            fetch(`https://project-eleven-server-site-cokjhjmwt-tanvirs-projects-23a7939e.vercel.app/addborrow/${_id}`,{
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
                  window.location.reload();
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
            <button onClick={() => handleDelete(_id)} className="btn h-[20px] btn-primary">return Button</button>
            <div className="card-actions justify-end"></div>
        </div>
        </div>
    );
};

export default AddToCardMaking;