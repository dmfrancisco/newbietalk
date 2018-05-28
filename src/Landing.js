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

const Landing = () => (
  <div className="relative max-w-xl mx-auto p-6 sm:px-10 sm:py-8 md:px-15">
    <Helmet>
      <title>Welcome</title>
      <html className="Landing bg-brown-lightest" />
    </Helmet>

    <Brick1
      className="absolute hidden md:block"
      style={{ top: 100, left: 100 }}
    />
    <Brick2
      className="absolute hidden lg:block"
      style={{ top: 500, left: 850 }}
    />

    <nav className="text-right mb-8">
      <Link className="Button" to="/app/start">
        Sign In
      </Link>
    </nav>

    <header className="max-w-md mx-auto text-center">
      <Logo
        animated
        width={374}
        height={45}
        className="max-w-full mb-8 sm:mb-18"
      />

      <h2 className="text-xl sm:text-4xl mb-8 leading-tight">
        Where aspiring tech people meet friendly professionals
      </h2>

      <div className="text-center mb-8">
        <Avatar
          className="inline-block m-2 sm:m-8"
          topType="LongHairStraight2"
          skinColor="Brown"
          eyeType="Close"
          mouthType="Smile"
        />
        <Avatar
          className="inline-block m-2 sm:m-8"
          topType="LongHairCurvy"
          skinColor="Black"
          hairColor="PastelPink"
          eyeType="Hearts"
          accessoriesType="Round"
        />
        <Avatar
          className="inline-block m-2 sm:m-8"
          topType="LongHairShavedSides"
          eyeType="WinkWacky"
          mouthType="Twinkle"
        />
      </div>

      <p className="text-lg sm:text-xl text-brown font-bold mb-8 leading-normal">
        So you hit a roadblock. You don’t know what to search for and the
        tech-related forums are very intimidating.
      </p>

      <p className="text-lg sm:text-xl text-brown font-bold mb-8 leading-normal">
        Newbie Talk is a{" "}
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

    <div className="flex flex-wrap justify-center md:items-end md:justify-end md:-mx-8 mb-8">
      <div className="Landing-fact Landing-fact--1 w-full md:w-1/2">
        <div className="Box bg-teal-lightest md:mr-8 md:ml-2">
          <h3 className="text-lg italic m-8">
            Fact: &nbsp;We’re all beginners at something
          </h3>

          <p className="text-brown leading-normal m-8">
            Everyone started as a beginner in their careers. Not only that’s a
            fact of life and completely fine, it can be fun. But learning new
            things can also be very frustrating at times.
          </p>

          <p className="text-brown leading-normal m-8">
            Newbie Talk is a safe place where you can remain anonymous and share
            your questions privately with someone you choose to connect with.
          </p>
        </div>
      </div>

      <div className="Landing-fact Landing-fact--2 w-full md:w-1/2">
        <div className="Box bg-blue-lightest md:m-6 md:mr-8">
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

      <div className="Landing-fact Landing-fact--3 w-full hidden sm:block md:w-1/2">
        <Quotes
          className="Box bg-purple-lightest md:m-4 md:mr-6"
          title="Fact: &nbsp;We all make miskates"
          items={quotes}
        />
      </div>
    </div>

    <div className="w-full mx-auto mb-8 py-8" style={{ maxWidth: "42rem" }}>
      <h3 className="text-xl text-center mb-8">How it works</h3>

      <p className="sm:hidden text-center text-brown">
        You can try out an interactive demo in larger screens!
      </p>

      <Demo className="hidden sm:flex" />
    </div>

    <LandingFooter />
  </div>
);

export default Landing;
