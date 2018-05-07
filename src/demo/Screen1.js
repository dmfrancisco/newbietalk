import React, { Component, Fragment } from "react";
import Avatar from "../Avatar";

const TopOption = {
  key: 'topType',
  label: '🎩',
  values: {
    Top: "NoHair",
    // "Hat",
    // "Hijab",
    // "WinterHat4",
    "Hair 1": "LongHairBigHair",
    "Hair 2": "LongHairBob",
    // "LongHairBun",
    "Hair 3": "LongHairCurly",
    "Hair 4": "LongHairCurvy",
    // "LongHairDreads",
    // "LongHairFrida",
    "Hair 5": "LongHairFro",
    // "LongHairFroBand",
    "Hair 6": "LongHairNotTooLong",
    // "LongHairShavedSides",
    "Hair 7": "LongHairMiaWallace",
    "Hair 8": "LongHairStraight",
    "Hair 9": "LongHairStraight2",
    "Hair 10": "LongHairStraightStrand",
    // "ShortHairDreads01",
    // "ShortHairDreads02",
    // "ShortHairFrizzle",
    "Hair 11": "ShortHairShaggyMullet",
    // "ShortHairShortCurly",
    // "ShortHairShortFlat",
    // "ShortHairShortRound",
    // "ShortHairShortWaved",
    // "ShortHairSides",
    // "ShortHairTheCaesar",
    // "ShortHairTheCaesarSidePart",
    Turban: "Turban",
    "WinterHat 1": "WinterHat1",
    "WinterHat 2": "WinterHat2",
    "WinterHat 3": "WinterHat3",
    Eyepatch: "Eyepatch",
  }
}

const AccessoriesOption = {
  key: 'accessoriesType',
  label: '👓',
  values: {
    Glasses: "Blank",
    Kurt: "Kurt",
    "Prescription 1": "Prescription01",
    "Prescription 2": "Prescription02",
    Round: "Round",
    Sunglasses: "Sunglasses",
    Wayfarers: "Wayfarers"
  },
}

/* const HatColorOption = {
  key: 'hatColor',
  label: '🎨 HatColor',
  values: {},
} */

const HairColorOption = {
  key: 'hairColor',
  label: '💈',
  values: {
    "Hair Color": "BlondeGolden",
    Auburn: "Auburn",
    Black: "Black",
    Blonde: "Blonde",
    Brown: "Brown",
    "Brown Dark": "BrownDark",
    "Pastel Pink": "PastelPink",
    Platinum: "Platinum",
    Red: "Red",
    "Silver Gray": "SilverGray",
  },
}

const FacialHairOption = {
  key: 'facialHairType',
  label: '✂️',
  values: {
    "No Facial Hair": "Blank",
    "Beard Medium": "BeardMedium",
    "Beard Light": "BeardLight",
    "Beard Magestic": "BeardMagestic",
    "Moustache Fancy": "MoustacheFancy",
    "Moustache Magnum": "MoustacheMagnum",
  },
}

const FacialHairColorOption = {
  key: 'facialHairColor',
  label: '💈',
  values: {
    "Facial Hair Color": "BlondeGolden",
    Auburn: "Auburn",
    Black: "Black",
    Blonde: "Blonde",
    Brown: "Brown",
    "Brown Dark": "BrownDark",
    Platinum: "Platinum",
    Red: "Red",
  },
}

/* const EyesOption = {
  key: 'eyeType',
  label: '👀 Eyes',
  values: {},
}

const EyebrowOption = {
  key: 'eyebrowType',
  label: '✏️ Eyebrow',
  values: {},
}

const MouthOption = {
  key: 'mouthType',
  label: '👄 Mouth',
  values: {},
} */

const SkinOption = {
  key: 'skinColor',
  label: '🎨',
  values: {
    Yellow: "Skin",
    Pale: "Pale",
    Light: "Light",
    Brown: "Brown",
    "Dark Brown": "DarkBrown",
    Black: "Black",
    Tanned: "Tanned",
  }
}

const defaultAvatarStyles = {
  topType: "NoHair",
  accessoriesType: "Blank",
  hairColor: "BlondeGolden",
  facialHairType: "Blank",
  facialHairColor: "BlondeGolden",
  eyeType: null,
  eyebrowType: null,
  mouthType: null,
  skinColor: "Yellow",
}

class Screen1 extends Component {  
  state = {
    avatarStyles: defaultAvatarStyles,
  }

  handleChange = (e) => {
    const avatarStyles = { ...this.state.avatarStyles };
    avatarStyles[e.target.name] = e.target.value;
    this.setState({ avatarStyles });
  }

  render() {
    const { avatarStyles } = this.state;
    
    const options = [
      TopOption,
      avatarStyles.topType.includes("Hair") && !avatarStyles.topType.includes("NoHair") ? HairColorOption : null,
      FacialHairOption,
      avatarStyles.facialHairType !== "Blank" ? FacialHairColorOption : null,
      AccessoriesOption,
      SkinOption,
    ].filter((el) => el);

    return (
      <div className="p-6 bg-white">
        <div className="w-3/4 mx-auto rounded-lg bg-blue-lightest p-6 mb-6">
          <h4 className="text-lg italic text-center mb-4 tracking-none">Let’s build your avatar…</h4>

          <Avatar
            {...avatarStyles}
            className="block mb-4 mx-auto"
          />

          <div className="flex flex-wrap">
            { options.map((menu) => (
              <div key={menu.key} className="w-1/2 p-1">
                <select
                  name={menu.key}
                  className="w-full border-2 h-10 bg-transparent"
                  onChange={this.handleChange}
                  value={avatarStyles[menu.key]}
                >
                  {Object.entries(menu.values).map(([ label, key ]) => (
                    <option value={key} key={key}>
                      {menu.label} {label}
                    </option>
                  )) }
                </select>
              </div>
            )) }
          </div>
        </div>

        <div className="w-3/4 mx-auto rounded-lg bg-blue-lightest p-6 mb-6">
          <h4 className="text-lg italic text-center mb-4 tracking-none">What is your pronoun?</h4>
        </div>
      </div>
    );
  }
}

export default Screen1;
