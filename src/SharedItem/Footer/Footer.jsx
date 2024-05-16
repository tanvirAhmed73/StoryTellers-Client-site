const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
  
          {/* shop logo */}
          <img className="w-[150px]" src="https://static.vecteezy.com/system/resources/thumbnails/004/815/526/small_2x/storytelling-word-handwritten-with-custom-calligraphy-creative-word-for-logotype-badge-icon-card-postcard-logo-banner-with-colorful-stars-and-swoosh-illustration-design-vector.jpg" alt="" />
          <p>
            StoryTellers Ltd.
            <br />
            Providing Awesome Books Since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  