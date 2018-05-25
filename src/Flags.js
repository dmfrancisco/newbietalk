import React from "react";
import { Emoji, Picker } from "emoji-mart";

const Flag = props => (
  <Emoji
    set="google"
    size={32}
    backgroundImageFn={() => `${process.env.PUBLIC_URL}/flags.png`}
    {...props}
  />
);

const FlagPicker = props => (
  <Picker
    set="google"
    emojiSize={32}
    title=""
    showSkinTones={false}
    color="#fff"
    include={["flags"]}
    emoji="waving_white_flag"
    backgroundImageFn={() => `${process.env.PUBLIC_URL}/flags.png`}
    perLine={6}
    {...props}
  />
);

export { Flag, FlagPicker };
