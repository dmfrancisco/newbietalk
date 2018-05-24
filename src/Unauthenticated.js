import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Door from "./images/Door";
import { Brick1, Brick2 } from "./images/Bricks";

const Unauthenticated = () => (
  <div className="container min-h-screen flex justify-center items-center text-center bg-black">
    <Helmet>
      <html className="bg-noir" />
    </Helmet>

    <div className="relative">
      <Brick1
        className="absolute text-yellow-lightest hidden sm:block"
        style={{ top: -10, left: -100 }}
      />
      <Brick2
        className="absolute text-yellow-lightest hidden sm:block"
        style={{ top: 80, right: -60 }}
      />

      <Link to="/app/start">
        <Door className="Door mb-8" />
      </Link>

      <p className="font-bold text-white leading-normal sm:text-lg">
        You need to{" "}
        <Link to="/app/start" className="text-inherit">
          login
        </Link>{" "}
        to access this page
      </p>
    </div>
  </div>
);

export default Unauthenticated;
