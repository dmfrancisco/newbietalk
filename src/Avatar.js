import React, { Component } from "react";
import Avataaar from "avataaars";
import "./Avatar.css";

class Avatar extends Component {
  render() {
    const {
      size = "5rem",
      width = size,
      height = size,
      fontSize = size, // For the inset box shadow
      topType,
      accessoriesType,
      hairColor,
      facialHairType,
      facialHairColor,
      eyeType,
      eyebrowType,
      mouthType,
      skinColor,
    } = this.props;

    const avatarStyle = {
      position: "absolute",
      width: "208%",
      height: "208%",
      left: "-50%",
      top: "-37%",
      transform: "rotate(3deg)",
    };

    const className = `Avatar relative overflow-hidden rounded-full shadow ${this
      .props.className || ""}`;

    return (
      <div style={{ width, height, fontSize }} className={className}>
        <Avataaar
          style={avatarStyle}
          topType={topType}
          accessoriesType={accessoriesType}
          hairColor={hairColor}
          facialHairType={facialHairType}
          facialHairColor={facialHairColor}
          eyeType={eyeType}
          eyebrowType={eyebrowType}
          mouthType={mouthType}
          skinColor={skinColor}
        />
      </div>
    );
  }
}

export default Avatar;
