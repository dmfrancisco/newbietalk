import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SliderBox from "./SliderBox";
import Modal from "./Modal";
import Avatar from "./Avatar";
import Demo from "./Demo";
import { Cross } from "./Icons";
import Logo from "./images/Logo";
import Flag from "./images/Flag";
import SpaceUnicorn from "./images/SpaceUnicorn";
import { Brick1, Brick2 } from "./images/Bricks";

const tweets = [
  {
    text: "I once sent 2000 emails to a customer.",
    author: "Matthew",
    job: "Software Engineer at Dropbox",
    src: "https://twitter.com/MatthewGerstman",
  }, {
    text: "I once wiped out 10,000 people’s last names on Flickr, which we had to restore from tape backups.",
    author: "Daniel",
    job: "Software Engineer at Flickr",
    src: "https://twitter.com/waferbaby",
  }, {
    text: "BBC iPlayer may have gone down for an evening.",
    author: "Jake",
    job: "Software Engineer at Google",
    src: "https://twitter.com/jaffathecake",
  }, {
    text: "I prevented all British people from signing up for Treehouse for about 12 hours because I forgot how non-US postal codes work.",
    author: "Aimee",
    job: "Senior Developer at TreeHouse",
    src: "https://twitter.com/aimee_ebooks"
  }, {
    text: "Typed DELETE instead of SELECT. Had to restore the customer orders table by parsing log files.",
    author: "Nicola",
    job: "Wordpress Core Contributor",
    src: "https://twitter.com/notnownikki"
  }, {
    text: "Hello, my name is David. I would fail to write bubble sort on a whiteboard. I look code up on the internet all the time.",
    author: "DHH",
    job: "Creator of Ruby on Rails",
    src: "https://twitter.com/dhh",
  }, {
    text: "I'm fairly convinced the main difference between a senior dev and a junior dev is the senior knows how to hide the evidence.",
    author: "Donia",
    job: "Creator of happyspacebot",
    src: "https://twitter.com/doniamae",
  }
];

class Landing extends Component {
  state = {
    showFlagModal: false,
  }

  openFlagModal = (e) => {
    if (e) e.preventDefault();
    this.setState({ showFlagModal: true });
  }
  
  closeFlagModal = (e) => {
    if (e) e.preventDefault();
    this.setState({ showFlagModal: false });
  }

  render() {
    const { showFlagModal } = this.state;
    
    return (
      <div className="relative max-w-xl mx-auto px-15 py-8">
        <Brick1 className="absolute" style={{ top: 100, left: 100 }} />
        <Brick2 className="absolute" style={{ top: 500, left: 850 }} />
      
        <nav className="text-right mb-8">
          <a className="Button" href="#">Sign In</a>
        </nav>

        <header className="max-w-md mx-auto text-center">
          <div style={{ marginBottom: "5rem" }}>
            <Logo className="fill-current" />
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
            So you hit a roadblock. You don’t know what to search for 
            and the tech-related forums are very intimidating.
          </p>

          <p className="text-xl text-brown font-bold mb-8 leading-normal">
            Smalltalk is a{" "}
            <a
              href="#about-red-flag"
              onClick={this.openFlagModal}
              className="text-inherit"
            >
              safe place
            </a>*
            where you can privately chat with another person to get help.
          </p>
      
          <Link to="#" className="Button bg-brown-light text-xl px-6 py-4 mt-8 mb-6">Get started</Link>
      
          <div className="italic text-brown mb-8">It’s anonymous and free.</div>
        </header>
      
        <div className="flex flex-wrap items-end justify-end -mx-8 mb-8">
          <div className="w-1/2" style={{ marginBottom: -160 }}>
            <div className="Box bg-teal-lightest mr-8 ml-2">
              <h3 className="text-lg italic m-8">Fact: &nbsp;We’re all beginners at something</h3>

              <p className="text-brown leading-normal m-8">
                Everyone started as a beginner in their careers.
                Not only that’s a fact of life and completely fine, it can be fun.
                But learning new things can also be very frustrating at times.
              </p>

              <p className="text-brown leading-normal m-8">
                Smalltalk is a safe place where you can remain anonymous and
                share your questions privately with someone you choose to connect with.
              </p>
            </div>
          </div>

          <div className="w-1/2" style={{ marginTop: 20 }}>
            <div className="Box bg-blue-lightest m-6 mr-8">
              <h3 className="text-lg italic m-8">Fact: &nbsp;We’re all good at something</h3>

              <p className="text-brown leading-normal m-8">
                Have you been working in tech for some time?
                Pretty sure what you have to share is huge. Join us in helping others.
                We won’t bug you, you decide who and when you want to help.
              </p>
            </div>
          </div>

          <div className="w-1/2" style={{ marginTop: 20 }}>
            <SliderBox 
              className="Box bg-purple-lightest m-4 mr-6"
              title="Fact: &nbsp;We all make miskates"
              items={tweets}
            />
          </div>
        </div>
      
        <div className="w-3/4 mx-auto mb-8 py-8">
          <h3 className="text-xl text-center mb-8">How it works...</h3>
      
          <Demo />
        </div>
      
        <footer className="flex -mx-4 leading-normal select-none">
          <SpaceUnicorn className="block flex-none mr-4" />
      
          <p className="mr-4">Space Unicorn wishes <br/> you a happy day!</p>
      
          <div className="flex-1" />

          <nav className="mb-8 flex-none">
            <Link to="/" className="text-inherit no-underline font-bold p-3">
              Get Started
            </Link>

            <Link to="/" className="text-inherit no-underline font-bold p-3">
              Languages
            </Link>

            <Link to="/" className="text-inherit no-underline font-bold p-3">
              Code of Conduct
            </Link>

            <Link to="/" className="text-inherit no-underline font-bold p-3">
              Thanks
            </Link>

            <Link to="/" className="text-inherit no-underline font-bold p-3">
              Privacy
            </Link>

            <Link to="/" className="text-inherit no-underline font-bold p-3">
              Terms
            </Link>
          </nav>
        </footer>
      
        { showFlagModal && (
          <Modal onDismiss={this.closeFlagModal} className="pin-b pin-x absolute max-w-xl mx-auto px-15 -mb-6">
            <div className="animated bounceInUp float-right w-1/2">
              <div className="Box bg-yellow-lightest hyphens mb-6">
                <button className="Button rounded-full bg-grey-light p-3 -mt-6 -ml-6 float-left">
                  <Cross className="block" />
                </button>        

                <h3 className="text-lg italic m-8">Keeping SmallTalk friendly and safe</h3>

                <p className="text-brown leading-normal m-8 mb-4">
                  We try to design features that incentivize good behavior, but sometimes it isn’t enough. 
                </p>

                <p className="text-brown leading-normal m-8 mt-4">
                  Everytime you encounter something in any way innapropriate,
                  please let us know by clicking on the flag available on the bottom right corner. 
                </p>
              </div>

              <Flag className="block float-right" style={{ marginRight: -6 }} />
            </div>
          </Modal>
        ) }
      </div>
    );
  }
}

export default Landing;
