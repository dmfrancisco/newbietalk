import React from "react";
import Logo from "../images/Logo";
import Avatar from "../Avatar";
import { Down } from "../Icons";

export default props => (
  <header className="flex items-center mb-6">
    <Logo width={200} height={24} className="flex-none" />

    <div className="flex-1" />

    <Avatar {...props.avatarStyles} className="block flex-none" size="2.5rem" />
    <Down className="block flex-none ml-4" />
  </header>
);
