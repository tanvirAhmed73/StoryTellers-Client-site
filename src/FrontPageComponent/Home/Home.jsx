import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://timelinecovers.pro/facebook-cover/download/library-facebook-cover.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To The StoryTeller</h1>
          </div>
        </div>
      </div>

      {/* 4types of books catagories with `relevant image` and `category name`, `relevant button*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

        <div className="mt-6 mb-6 card w-full h-96 glass">
          <figure>
            <img
              className="w-max"
              src="https://images-platform.99static.com//zl1Nd21pjU3F8iVKRTgZ6wFTplY=/467x0:1800x1333/fit-in/500x500/99designs-contests-attachments/138/138098/attachment_138098622"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Health & Fitness</h2>
            <div className="card-actions justify-end">
              <Link to={'/healthAllBooks'}>
                <button className="btn btn-primary">Show All Books</button> 
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-6 card h-96 w-full glass">
          <figure>
            <img
              className="w-max"
              src="https://i.pinimg.com/736x/43/1f/9a/431f9a440df813d67b919d5688d48fc5.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Computers & Technology</h2>
            <div className="card-actions justify-end">
            <Link to={'/computerAllBooks'}>
                <button className="btn btn-primary">Show All Books</button> 
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-6 card h-96 w-full glass">
          <figure>
            <img
              className="w-max"
              src="https://img.freepik.com/premium-vector/stem-education-isometric-concept-s-composition-with-book-math-blackboard-formulas-academic-hat-illustration_1284-64012.jpg?w=2000"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Science & Math</h2>
            <div className="card-actions justify-end">
            <Link to={'/scienceAllBooks'}>
                <button className="btn btn-primary">Show All Books</button> 
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-6 mb-6 card h-96 w-full glass">
          <figure>
            <img
              className="w-max"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/191534280/original/08133e3536fc1393d19d434550e2e4e70c0ace4e/design-book-or-ebook-cover-about-business-marketing-investing-and-technology.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Business & Investing</h2>
            <div className="card-actions justify-end">
            <Link to={'/bussinessAllBooks'}>
                <button className="btn btn-primary">Show All Books</button> 
              </Link>
            </div>
          </div>
        </div>

      
      </div>

        {/* more  books */}
        <div className="mt-9  pb-28 mx-auto  text-center ">
            <h1 className=" pt-9 text-4xl font-bold drop-shadow-xl text-black italic ">Another Books</h1>
            <div  className="grid grid-cols-1 pt-9  justify-center md:grid-cols-2 lg:grid-cols-5">
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="https://mrbsemporium.com/wp-content/uploads/2023/03/9780349145167.jpg" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LqrXPKZ0hda8Ro8o0FwC2KEhEp94Pvwn9w&usqp=CAU" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="https://m.media-amazon.com/images/I/81AgPT+BVhL._AC_UF1000,1000_QL80_.jpg" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="https://m.media-amazon.com/images/I/91LB1-eNKpL._AC_UF1000,1000_QL80_.jpg" alt="" />
                <img className="w-[235px] h-[235px] ml-[90px] md:ml-[70px] lg:ml-1 mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm_-ZJsGEaLUyhyJHa5LVmuoZYTPxTFrDn2M0BEvBafO7rYc7ofy-efUD56bkC-W4y4c&usqp=CAU" alt="" />
            </div>
            <button className="btn mt-4"><NavLink to={'/'}>View More</NavLink></button>

        </div>


        {/* banner */}
      <div className="mt-5">
        <div
          className="hero  mx-auto h-80"
          style={{
            backgroundImage:
              "url(https://s26162.pcdn.co/wp-content/uploads/2018/12/bestbookcovers2018.jpg)", 
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">Join Us Now</h1>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;
