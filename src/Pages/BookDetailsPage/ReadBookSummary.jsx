import { FaBookReader } from "react-icons/fa";

const ReadBookSummary = ({data}) => {
    const {bookName, authorName, bookImage,  description, } =data;

    const handleReadBook = ()=>{
     const bookPDFurl = "https://drive.google.com/file/d/1vXpEuvAsfhOLfipk-zJq49PUNMVk0fRM/view?usp=sharing"
     window.open(bookPDFurl, '_blank')
    }
    return (
    <div className="text-green-600">
        <div className="w-full bg-slate-700 ">
            <div>
                <h1 className="text-xl text-center mt-10  pt-8">Read Summary:{bookName}</h1>
            </div>
            <div>
                <h1 className=" text-center">Author is: "{authorName}"</h1>
            </div>
          <div className="text-justify p-14 ">
            <p className="italic">{description}</p>
          </div>

      <div className=" w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure className=" mb-4">
          <img className="w-full  " src={bookImage} alt="Shoes" />
        </figure>    
      </div>
      <div className="">
        
        <button onClick={handleReadBook} className="btn flex mx-auto  bg-green-600 text-white">
          <FaBookReader />
          <p>Read Full Book</p>
          </button>
      </div>
    </div>
    </div>
    );
};

export default ReadBookSummary;