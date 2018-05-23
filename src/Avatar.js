import React from "react";
import Avataaar from "avataaars";

const Avatar = props => {
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
    onClick,
  } = props;

  const avatarStyle = {
    position: "absolute",
    width: "208%",
    height: "208%",
    left: "-50%",
    top: "-37%",
    transform: "rotate(3deg)",
  };

  const className = `Avatar ${props.className || ""}`;

  return (
    <div
      style={{ width, height, fontSize }}
      className={className}
      onClick={onClick}
    >
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
};

export default Avatar;
