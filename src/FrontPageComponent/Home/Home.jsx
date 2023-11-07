import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* 4types of books catagories with `relevant image` and `category name`, `relevant button*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  items-center">

        <div className="mt-6 mb-6 card w-96 h-96 glass">
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

        <div className="mt-6 mb-6 card h-96 w-96 glass">
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

        <div className="mt-6 mb-6 card h-96 w-96 glass">
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
        
        <div className="mt-6 mb-6 card h-96 w-96 glass">
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
    </div>
  );
};

export default Home;
