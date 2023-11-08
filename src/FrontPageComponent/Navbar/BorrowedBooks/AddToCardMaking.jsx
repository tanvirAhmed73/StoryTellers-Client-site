// import Swal from "sweetalert2";
const AddToCardMaking = ({addBook}) => {
    const {
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
    console.log(addBook)

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
            <button className="btn h-[20px] btn-primary">return Button</button>
            <div className="card-actions justify-end"></div>
        </div>
        </div>
    );
};

export default AddToCardMaking;