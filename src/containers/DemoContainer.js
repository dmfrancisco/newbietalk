import { Container } from "unstated";

const helperOptions = [
  {
    username: "zaberjs",
    color: "teal",
    thanked: 14,
    avatarStyles: {
      topType: "LongHairMiaWallace",
      hairColor: "Black",
      skinColor: "Brown",
      accessoriesType: "Round",
      eyeType: "Close",
      eyebrowType: "RaisedExcited",
    },
    pronoun: "She / Her",
    languages: [
      { name: "Portuguese", icon: "flag-pt" },
      { name: "English", icon: "flag-gb" },
      { name: "Tetun-prasa", icon: "flag-tl" },
    ],
  },
  {
    username: "davidcodes",
    color: "blue",
    thanked: 6,
    avatarStyles: {
      topType: "LongHairStraight",
      hairColor: "BrownDark",
      facialHairType: "BeardLight",
      facialHairColor: "BrownDark",
      skinColor: "Light",
      eyebrowType: "RaisedExcited",
      mouthType: "Smile",
    },
    pronoun: "He / Him",
    languages: [
      { name: "Portuguese", icon: "flag-pt" },
      { name: "English", icon: "flag-gb" },
    ],
  },
];

class DemoContainer extends Container {
  state = {
    username: "myusername",
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
      { name: "", icon: "waving_white_flag" },
      { name: "", icon: "waving_white_flag" },
      { name: "", icon: "waving_white_flag" },
    ],
    helpDescription:
      "I know HTML and CSS and have this simple website but I’m not sure how to make this available for free.",
    helper: helperOptions[0],
  };

  setAvatarStyle = (name, value) => {
    const avatarStyles = { ...this.state.avatarStyles };
    avatarStyles[name] = value;
    this.setState({ avatarStyles });
  };

  setPronoun = pronoun => {
    this.setState({ pronoun });
  };

  setLanguageName = (index, name) => {
    const languages = [...this.state.languages];
    languages[index].name = name;
    this.setState({ languages });
  };

  setLanguageIcon = (index, icon) => {
    const languages = [...this.state.languages];
    languages[index].icon = icon;
    this.setState({ languages });
  };

  setHelpDescription(helpDescription) {
    this.setState({ helpDescription });
  }

  getHelperOptions() {
    return helperOptions;
  }

  setHelper(helper, callback) {
    this.setState({ helper });
    callback(); // FIXME: See https://github.com/jamiebuilds/unstated/pull/35
  }
}

export default DemoContainer;
