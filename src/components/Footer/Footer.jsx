import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto flex justify-between items-center py-10 text-lg font-light">
        <div>
          <p className="">&copy; 2024 Your Company. All rights reserved.</p>
          <p>
            Contact me at:{" "}
            <a href="mailto:aliahmed60345@gmail.com" className="underline">
              aliahmed60345@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p>Image Designed by slidesgo / Freepik</p>
          <p>
            Attribution Required:{" "}
            <a href="http://www.freepik.com">slidesgo / Freepik</a>
          </p>
          <p>
            License Terms:{" "}
            <a href="http://www.freepik.com/terms_of_use">
              Freepik Terms of Use
            </a>
          </p>
        </div>
        <div>
          <p>Connect with us:</p>
          <p>
            Follow us on Twitter:{" "}
            <a href="https://twitter.com/" className="font-semibold">
              JobJunction
            </a>
          </p>
          <p>
            Like us on Facebook:{" "}
            <a href="https://facebook.com/" className="font-semibold">
              JobJunction
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
