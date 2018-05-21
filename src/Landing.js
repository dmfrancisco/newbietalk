import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Quotes from "./Quotes";
import Avatar from "./Avatar";
import Demo from "./demo/Demo";
import LandingFooter from "./LandingFooter";
import Logo from "./images/Logo";
import { Brick1, Brick2 } from "./images/Bricks";
import quotes from "./quotes.json";
import "./Landing.css";

const Landing = () => (
  <div className="relative max-w-xl mx-auto px-15 py-8">
    <Helmet>
      <html className="Landing bg-brown-lightest" />
    </Helmet>

    <Brick1 className="absolute" style={{ top: 100, left: 100 }} />
    <Brick2 className="absolute" style={{ top: 500, left: 850 }} />

    <nav className="text-right mb-8">
      <Link className="Button" to="/app/start">
        Sign In
      </Link>
    </nav>

    <header className="max-w-md mx-auto text-center">
      <div style={{ marginBottom: "5rem" }}>
        <Logo animated width={340} height={45} />
      </div>

      <h2 className="text-4xl mb-8 leading-tight">
        Where aspiring tech people meet friendly professionals
      </h2>

      <div className="text-center mb-8">
        <Avatar
          className="inline-block m-8"
          topType="LongHairStraight2"
          skinColor="Brown"
          eyeType="Close"
          mouthType="Smile"
        />
        <Avatar
          className="inline-block m-8"
          topType="LongHairCurvy"
          skinColor="Black"
          hairColor="PastelPink"
          eyeType="Hearts"
          accessoriesType="Round"
        />
        <Avatar
          className="inline-block m-8"
          topType="LongHairShavedSides"
          eyeType="WinkWacky"
          mouthType="Twinkle"
        />
      </div>

      <p className="text-xl text-brown font-bold mb-8 leading-normal">
        So you hit a roadblock. You don’t know what to search for and the
        tech-related forums are very intimidating.
      </p>

      <p className="text-xl text-brown font-bold mb-8 leading-normal">
        Small Talk is a{" "}
        <Link to="/help/flag" className="text-inherit">
          safe place
        </Link>* where you can privately chat with another person to get code or
        design help.
      </p>

      <Link
        to="/app/start"
        className="Button bg-brown-light text-xl px-6 py-4 mt-8 mb-6"
      >
        Get started
      </Link>

      <div className="italic text-brown mb-8">It’s anonymous and free.</div>
    </header>

    <div className="flex flex-wrap items-end justify-end -mx-8 mb-8">
      <div className="w-1/2" style={{ marginBottom: -160 }}>
        <div className="Box bg-teal-lightest mr-8 ml-2">
          <h3 className="text-lg italic m-8">
            Fact: &nbsp;We’re all beginners at something
          </h3>

          <p className="text-brown leading-normal m-8">
            Everyone started as a beginner in their careers. Not only that’s a
            fact of life and completely fine, it can be fun. But learning new
            things can also be very frustrating at times.
          </p>

          <p className="text-brown leading-normal m-8">
            Small Talk is a safe place where you can remain anonymous and share
            your questions privately with someone you choose to connect with.
          </p>
        </div>
      </div>

      <div className="w-1/2" style={{ marginTop: 20 }}>
        <div className="Box bg-blue-lightest m-6 mr-8">
          <h3 className="text-lg italic m-8">
            Fact: &nbsp;We’re all good at something
          </h3>

          <p className="text-brown leading-normal m-8">
            Have you been working in tech for some time? Pretty sure what you
            have to share is huge. Join us in helping others. We won’t bug you,
            you decide whom and when you want to help.
          </p>
        </div>
      </div>

      <div className="w-1/2" style={{ marginTop: 20 }}>
        <Quotes
          className="Box bg-purple-lightest m-4 mr-6"
          title="Fact: &nbsp;We all make miskates"
          items={quotes}
        />
      </div>
    </div>

    <div className="w-3/4 mx-auto mb-8 py-8">
      <h3 className="text-xl text-center mb-8">How it works</h3>

      <Demo />
    </div>

    <LandingFooter />
  </div>
);

export default Landing;
