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

export default class ProfileContainer extends Container {
  state = {
    avatarStyles: {
      topType: "NoHair",
      accessoriesType: "Blank",
      hairColor: "BlondeGolden",
      facialHairType: "Blank",
      facialHairColor: "BlondeGolden",
      skinColor: "Yellow",
    },
    pronoun: "They / Them",
    languages: [
      { name: "", icon: "🏳️" },
      { name: "", icon: "🏳️" },
      { name: "", icon: "🏳️" },
    ],
  };

  getAvatarStyleOptions() {
    return [
      TopOption,
      this.state.avatarStyles.topType.includes("Hair") && !this.state.avatarStyles.topType.includes("NoHair") ? HairColorOption : null,
      FacialHairOption,
      this.state.avatarStyles.facialHairType !== "Blank" ? FacialHairColorOption : null,
      AccessoriesOption,
      SkinOption,
    ].filter((el) => el);
  }

  setAvatarStyle(name, value) {
    const avatarStyles = { ...this.state.avatarStyles };
    avatarStyles[name] = value;
    this.setState({ avatarStyles });
  }

  getPronounOptions() {
    return [
      "They / Them",
      "She / Her",
      "He / Him",
    ];
  }

  setPronoun(pronoun) {
    this.setState({ pronoun });
  }

  getLanguageIconOptions() {
    return [
      "🏳️",
      "🇺🇸",
    ];
  }

  setLanguageName(index, name) {
    const languages = [ ...this.state.languages ];
    languages[index].name = name;
    this.setState({ languages });
  }

  setLanguageIcon(index, icon) {
    const languages = [ ...this.state.languages ];
    languages[index].icon = icon;
    this.setState({ languages });
  }
}
