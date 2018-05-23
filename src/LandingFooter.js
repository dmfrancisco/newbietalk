import React from "react";
import { Link } from "react-router-dom";
import SpaceUnicorn from "./images/SpaceUnicorn";

const LandingFooter = () => (
  <footer className="Landing-footer sm:flex -mx-4 leading-normal select-none items-center lg:items-start justify-center">
    <SpaceUnicorn className="block flex-none mr-4 hidden md:block" />

    <p className="mr-4 hidden lg:block">
      Space Unicorn wishes <br /> you a happy day!
    </p>

    <div className="flex-1 hidden lg:block" />

    <nav className="mb-2 text-center sm:flex-none">
      <Link to="/languages" className="Landing-footer-link">
        Languages
      </Link>

      <Link to="/code-of-conduct" className="Landing-footer-link">
        Code of Conduct
      </Link>

      <Link to="/thanks" className="Landing-footer-link">
        Thanks
      </Link>

      <Link to="/privacy" className="Landing-footer-link">
        Privacy
      </Link>

      <Link to="/terms" className="Landing-footer-link">
        Terms
      </Link>

      <Link to="/about" className="Landing-footer-link">
        About
      </Link>
    </nav>
  </footer>
);

export default LandingFooter;
