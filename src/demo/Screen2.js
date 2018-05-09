import React from "react";
import { Subscribe } from "unstated";
import ProfileContainer from "./ProfileContainer";
import Logo from "../images/Logo";
import Avatar from "../Avatar";
import { Down } from "../Icons";
import "primer-tooltips/build/build.css";

export default () => (
  <Subscribe to={[ProfileContainer]}>
    {profile => {
      const languages = [{ name: "English", icon: "🇺🇸" }];

      return (
        <div className="p-6 pt-4">
          <header className="flex items-center mb-6">
            <Logo width={180} height={24} className="flex-none" />

            <div className="flex-1" />

            <Avatar {...profile.state.avatarStyles} className="block flex-none" size="2.5rem" />
            <Down className="block flex-none ml-4" />
          </header>

          <div className="Box bg-blue-lightest px-6 py-4 leading-normal mb-6">
            Congratulations! Your profile was created successfully. You can now either ask for help
            or wait and help others.
          </div>

          <div className="bg-brown-lightest rounded-lg p-6 mb-6">
            <strong className="inline-block text-lg italic mb-4">@myusername</strong>

            <em className="opacity-50 float-right text-lg font-bold">This is you</em>

            <div className="relative">
              <Avatar {...profile.state.avatarStyles} className="block mb-4" size="8rem" />

              <div
                className="absolute pin-t pin-l inline-block px-2 rounded border-2 text-2xl bg-white h-8"
                style={{ marginLeft: "6rem" }}
              >
                {languages.map(lang => (
                  <span key={lang.name} aria-label={lang.name} className="tooltipped tooltipped-s">
                    {lang.icon}
                  </span>
                ))}
              </div>

              <div
                className="absolute pin-b pin-l mb-6 inline-block px-2 py-1 rounded text-white font-bold"
                style={{ background: "#7c4dff", marginLeft: "6rem" }}
              >
                {profile.state.pronoun}
              </div>
            </div>

            <textarea
              className="block border-2 px-3 py-2 rounded w-full mb-4"
              placeholder="I need help with…"
              rows={3}
            />

            <button className="Button text-lg bg-brown-light">Ask for help</button>
          </div>

          <h4 className="text-lg italic mb-6">Help others</h4>

          <p className="mb-8">It looks like nobody is asking for help at the moment.</p>
        </div>
      );
    }}
  </Subscribe>
);
