import React from "react";
import Avatar from "../Avatar";
import "primer-tooltips/build/build.css";

export default props => {
  let languages = props.languages.filter(lang => lang.name);
  if (languages.length === 0) languages = [{ name: "English", icon: "🇺🇸" }];

  return (
    <div className="relative">
      <Avatar {...props.avatarStyles} className="block mb-4" size="8rem" />

      <div
        className="absolute pin-t pin-l inline-block px-2 rounded border-2 text-2xl bg-white h-8"
        style={{ marginLeft: "6rem" }}
      >
        {languages.map(lang => (
          <span
            key={lang.name}
            aria-label={lang.name}
            className="tooltipped tooltipped-s tooltipped-no-delay cursor-pointer"
          >
            {lang.icon}{" "}
          </span>
        ))}
      </div>

      <div
        className="absolute pin-b pin-l mb-6 inline-block px-2 py-1 rounded text-white font-bold"
        style={{ background: "#7c4dff", marginLeft: "6rem" }}
      >
        {props.pronoun}
      </div>

      { props.thanked && (
        <div
          className="absolute pin-b pin-l -mb-2 inline-block px-2 py-1 rounded text-white font-bold"
          style={{ background: "#097f1b", marginLeft: "6rem" }}
        >
          Thanked {props.thanked} times
        </div>
      )}
    </div>
  );
};
