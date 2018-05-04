import React, { Component } from 'react';
import Logo from "./Logo";
import SliderBox from "./SliderBox";

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
    text: "One time I prevented all British people from signing up for @treehouse for about 12 hours because I forgot how non-US postal codes work.",
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
    author: "Donia (Lasagna)",
    job: "Creator of @happyspacebot",
    src: "https://twitter.com/doniamae",
  }
];

class App extends Component {
  render() {
    return (
      <div className="max-w-xl mx-auto px-15 py-8">
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
      
          <p className="text-xl text-brown font-bold mb-8 leading-normal">
            So you hit a roadblock. You don’t know what to search for 
            and the tech-related forums are very intimidating.
          </p>

          <p className="text-xl text-brown font-bold mb-8 leading-normal">
            Smalltalk is a safe place where you can privately chat
            with another person to get help.
          </p>
        </header>
      
        <div className="flex">
          <SliderBox 
            className="w-1/2 bg-purple-lightest"
            title="Fact: We all make miskates"
            items={tweets}
          />
        </div>
      </div>
    );
  }
}

export default App;
