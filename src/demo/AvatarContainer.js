import { Container } from 'unstated';

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
    Skin: "Yellow",
    Pale: "Pale",
    Light: "Light",
    Brown: "Brown",
    "Dark Brown": "DarkBrown",
    Black: "Black",
    Tanned: "Tanned",
  }
}

export default class AvatarContainer extends Container {
  state = {
    topType: "NoHair",
    accessoriesType: "Blank",
    hairColor: "BlondeGolden",
    facialHairType: "Blank",
    facialHairColor: "BlondeGolden",
    skinColor: "Yellow",
  };

  getOptions() {
    return [
      TopOption,
      this.state.topType.includes("Hair") && !this.state.topType.includes("NoHair") ? HairColorOption : null,
      FacialHairOption,
      this.state.facialHairType !== "Blank" ? FacialHairColorOption : null,
      AccessoriesOption,
      SkinOption,
    ].filter((el) => el);
  }

  setStyle(name, value) {
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  }
}
