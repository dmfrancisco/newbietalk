import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { Help } from "./Icons";
import { Top, Accessories, HairColor, FacialHair, FacialHairColor, Skin } from "./avatarStyles";

class AvatarBuilder extends Component {
  getAvatarStyleOptions = () => {
    const { avatarStyles } = this.props;

    return [
      Top,
      avatarStyles.topType.includes("Hair") &&
      !avatarStyles.topType.includes("NoHair") ? HairColor : null,
      FacialHair,
      avatarStyles.facialHairType !== "Blank" ? FacialHairColor : null,
      Accessories,
      Skin,
    ].filter(el => el);
  }

  render() {
    const { helpUrl, avatarStyles, onChange } = this.props;
    
    return (
      <div className="relative mx-auto rounded-lg bg-blue-lightest p-6 mb-6 w-3/4">
        <Link to={helpUrl} className="absolute block pin-t pin-r m-2 p-2 text-inherit">
          <Help />
        </Link>

        <h4 className="text-lg italic text-center mb-4 tracking-none">
          Let’s build your avatar…
        </h4>

        <Avatar {...avatarStyles} className="block mb-4 mx-auto" />

        <div className="flex flex-wrap">
          {this.getAvatarStyleOptions().map(menu => (
            <div key={menu.key} className="w-1/2 p-1">
              <select
                name={menu.key}
                className="w-full border-2 h-10 bg-transparent rounded"
                onChange={e => onChange(e.target.name, e.target.value)}
                value={avatarStyles[menu.key]}
              >
                {Object.entries(menu.values).map(([label, key]) => (
                  <option value={key} key={key}>
                    {menu.label} {label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AvatarBuilder;
