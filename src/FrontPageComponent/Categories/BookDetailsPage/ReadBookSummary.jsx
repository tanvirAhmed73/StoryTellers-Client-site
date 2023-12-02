

const ReadBookSummary = ({data}) => {
    const {bookName, authorName, bookImage,  description, } =data;

    return (
    <div>
        <div className="text-center text-white text-7xl uppercase">Read Summary</div>
        <div className="w-full bg-slate-700 text-black">


            <div>
                <h1 className="text-6xl text-center mt-10 mb-7  pt-8">{bookName}</h1>
            </div>
            <div>
                <h1 className="text-3xl text-center mt-10 mb-7">Author is: "{authorName}"</h1>
            </div>
          <div className="text-center p-14 text-7xl">
            <p className="italic">{description}</p>
          </div>

      <div className=" w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={bookImage} alt="Shoes" />
        </figure>
        
       
      
      </div>
    </div>
    </div>
    );
};

export default ReadBookSummary;