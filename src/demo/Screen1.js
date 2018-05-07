import React, { Component, Fragment } from "react";
import Avatar from "../Avatar";

const TopOption = {
  key: 'topType',
  label: '🎩 Top',
  values: {
    NoHair: "NoHair",
    Eyepatch: "Eyepatch",
    // "Hat",
    // "Hijab",
    Turban: "Turban",
    WinterHat1: "WinterHat1",
    WinterHat2: "WinterHat2",
    WinterHat3: "WinterHat3",
    // "WinterHat4",
    Hair1: "LongHairBigHair",
    Hair2: "LongHairBob",
    // "LongHairBun",
    Hair3: "LongHairCurly",
    Hair4: "LongHairCurvy",
    // "LongHairDreads",
    // "LongHairFrida",
    Hair5: "LongHairFro",
    // "LongHairFroBand",
    Hair6: "LongHairNotTooLong",
    // "LongHairShavedSides",
    Hair7: "LongHairMiaWallace",
    Hair8: "LongHairStraight",
    Hair9: "LongHairStraight2",
    Hair10: "LongHairStraightStrand",
    // "ShortHairDreads01",
    // "ShortHairDreads02",
    // "ShortHairFrizzle",
    Hair11: "ShortHairShaggyMullet",
    // "ShortHairShortCurly",
    // "ShortHairShortFlat",
    // "ShortHairShortRound",
    // "ShortHairShortWaved",
    // "ShortHairSides",
    // "ShortHairTheCaesar",
    // "ShortHairTheCaesarSidePart",
  }
}

const AccessoriesOption = {
  key: 'accessoriesType',
  label: '👓 Glasses',
  values: {
    Blank: "Blank",
    Kurt: "Kurt",
    Prescription01: "Prescription01",
    Prescription02: "Prescription02",
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
  label: '💈 Hair Color',
  values: {
    Auburn: "Auburn",
    Black: "Black",
    Blonde: "Blonde",
    BlondeGolden: "BlondeGolden",
    Brown: "Brown",
    BrownDark: "BrownDark",
    PastelPink: "PastelPink",
    Platinum: "Platinum",
    Red: "Red",
    SilverGray: "SilverGray",
  },
}

const FacialHairOption = {
  key: 'facialHairType',
  label: '🧔 Facial Hair',
  values: {
    Blank: "Blank",
    BeardMedium: "BeardMedium",
    BeardLight: "BeardLight",
    BeardMagestic: "BeardMagestic",
    MoustacheFancy: "MoustacheFancy",
    MoustacheMagnum: "MoustacheMagnum",
  },
}

const FacialHairColorOption = {
  key: 'facialHairColor',
  label: '✂️ Facial Hair Color',
  values: {
    Auburn: "Auburn",
    Black: "Black",
    Blonde: "Blonde",
    BlondeGolden: "BlondeGolden",
    Brown: "Brown",
    BrownDark: "BrownDark",
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
  label: '🎨 Skin',
  values: {
    Tanned: "Tanned",
    Yellow: "Yellow",
    Pale: "Pale",
    Light: "Light",
    Brown: "Brown",
    DarkBrown: "DarkBrown",
    Black: "Black",
  }
}
    
const options = [
  SkinOption,
  TopOption,
  HairColorOption,
  AccessoriesOption,
  FacialHairOption,
  FacialHairColorOption,
];

class Screen1 extends Component {
  state = {
    avatarStyles: {
      topType: "NoHair",
      accessoriesType: "Blank",
      hairColor: "Auburn",
      facialHairType: "Blank",
      facialHairColor: "Auburn",
      eyeType: null,
      eyebrowType: null,
      mouthType: null,
      skinColor: "Yellow",
    },
  }

  handleChange = (e) => {
    const avatarStyles = { ...this.state.avatarStyles };
    avatarStyles[e.target.name] = e.target.value;
    this.setState({ avatarStyles });
  }

  render() {
    const { avatarStyles } = this.state;

    return (
      <div className="p-6 bg-brown-lightest h-full">
        <Avatar
          {...avatarStyles}
          className="block mb-4"
        />
    
        { options.map((menu) => (
          <select 
            key={menu.key}
            name={menu.key}
            className="border-2 h-10 bg-transparent m-1"
            onChange={this.handleChange}
            value={avatarStyles[menu.key]}
          >
            {Object.entries(menu.values).map(([ label, key ]) => (
              <option value={key} key={key}>
                {menu.label} · {label}
              </option>
            )) }
          </select>
        )) }
      </div>
    );
  }
}

export default Screen1;
