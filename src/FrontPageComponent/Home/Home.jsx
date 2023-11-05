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

        <div className="mt-6 mb-6 card w-96 glass">
          <figure>
            <img
              className="w-max"
              src="https://i.ibb.co/fDb15Kn/Apple-Ericsson.jpg"
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

        <div className="mt-6 mb-6 card w-96 glass">
          <figure>
            <img
              className="w-max"
              src="https://i.ibb.co/fDb15Kn/Apple-Ericsson.jpg"
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

        <div className="mt-6 mb-6 card w-96 glass">
          <figure>
            <img
              className="w-max"
              src="https://i.ibb.co/fDb15Kn/Apple-Ericsson.jpg"
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
        
        <div className="mt-6 mb-6 card w-96 glass">
          <figure>
            <img
              className="w-max"
              src="https://i.ibb.co/fDb15Kn/Apple-Ericsson.jpg"
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
