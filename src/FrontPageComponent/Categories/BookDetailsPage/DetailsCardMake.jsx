import Swal from "sweetalert2";
const DetailsCardMake = ({data}) => {
    const {_id, bookName, authorName, bookImage, quantityOfTheBook, description, category, rating} =data;
  

//   const handleAddtoCart = ()=>{
//     const productName = data.productName;

//     const brandName = data.brandName;
//     const productImage = data.productImage;
//     const price = data.price;
//     const description = data.description;
//     const catagory = data.catagory;
//     const rating = data.rating;
//     const addCart = "addToCart";

    
//     const addToCart = {
//       productName,
//       brandName,
//       productImage,
//       price,
//       description,
//       catagory,
//       rating,
//       addCart,
//     };
//     console.log(addToCart);

//     // send data to the server
//     fetch(
//       "https://brand-store-server-l1y6spdbz-tanvirs-projects-23a7939e.vercel.app/addcart",
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(addToCart),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Added To the cart successfully",
//             icon: "success",
//             confirmButtonText: "Close",
//           });
//         }
//       });


  
//   }



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
            <button  className="btn block mx-auto btn-success">Borrow</button>                     
            <button  className="btn block mx-auto btn-success">Read</button>                     
        </div>
        

        
        

      </div>
    </div>
  );
};

export default DetailsCardMake;