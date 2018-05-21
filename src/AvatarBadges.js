import React from "react";
import Avatar from "./Avatar";

const AvatarBadges = ({ languages, avatarStyles, pronoun, thanked }) => {
  let filteredLanguages = languages.filter(lang => lang.name);

  if (filteredLanguages.length === 0) {
    filteredLanguages = [{ name: "English", icon: "🇺🇸" }];
  }

  return (
    <div className="relative">
      <Avatar {...avatarStyles} className="block mb-4" size="8rem" />

      <div
        className="absolute pin-t pin-l inline-block px-2 rounded border-2 text-2xl bg-white h-8"
        style={{ marginLeft: "6rem" }}
      >
        {filteredLanguages.map(lang => (
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
        {pronoun}
      </div>

      {thanked > 0 && (
        <div
          className="absolute pin-b pin-l -mb-2 inline-block px-2 py-1 rounded text-white font-bold"
          style={{ background: "#097f1b", marginLeft: "6rem" }}
        >
          Thanked {thanked} times
        </div>
      )}
    </div>
  );
};

export default AvatarBadges;
