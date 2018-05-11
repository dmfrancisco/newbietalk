import { Container } from "unstated";

const helperOptions = [
  {
    name: "@zaberjs",
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
      { name: "Portuguese", icon: "🇵🇹" },
      { name: "English", icon: "🇬🇧" },
      { name: "Tetun-prasa", icon: "🇹🇱" },
    ],
  },
  {
    name: "@davidcodes",
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
    languages: [{ name: "Portuguese", icon: "🇵🇹" }, { name: "English", icon: "🇬🇧" }],
  },
];

export default class extends Container {
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
    languages: [{ name: "", icon: "🏳️" }, { name: "", icon: "🏳️" }, { name: "", icon: "🏳️" }],
    helpDescription:
      "I know HTML and CSS and have this simple website but I’m not sure how to make this available for free.",
    helper: helperOptions[0],
  };

  setAvatarStyle = (name, value) => {
    const avatarStyles = { ...this.state.avatarStyles };
    avatarStyles[name] = value;
    this.setState({ avatarStyles });
  }

  getPronounOptions() {
    return ["They / Them", "She / Her", "He / Him"];
  }

  setPronoun(pronoun) {
    this.setState({ pronoun });
  }

  getLanguageIconOptions() {
    return [
      "🏳️",
      "🇦🇫 Afghanistan",
      "🇦🇽 Åland Islands",
      "🇦🇱 Albania",
      "🇩🇿 Algeria",
      "🇦🇸 American Samoa",
      "🇦🇩 Andorra",
      "🇦🇴 Angola",
      "🇦🇮 Anguilla",
      "🇦🇶 Antarctica",
      "🇦🇬 Antigua & Barbuda",
      "🇦🇷 Argentina",
      "🇦🇲 Armenia",
      "🇦🇼 Aruba",
      "🇦🇨 Ascension Island",
      "🇦🇺 Australia",
      "🇦🇹 Austria",
      "🇦🇿 Azerbaijan",
      "🇧🇸 Bahamas",
      "🇧🇭 Bahrain",
      "🇧🇩 Bangladesh",
      "🇧🇧 Barbados",
      "🇧🇾 Belarus",
      "🇧🇪 Belgium",
      "🇧🇿 Belize",
      "🇧🇯 Benin",
      "🇧🇲 Bermuda",
      "🇧🇹 Bhutan",
      "🇧🇴 Bolivia",
      "🇧🇦 Bosnia & Herzegovina",
      "🇧🇼 Botswana",
      "🇧🇻 Bouvet Island",
      "🇧🇷 Brazil",
      "🇮🇴 British Indian Ocean Territory",
      "🇻🇬 British Virgin Islands",
      "🇧🇳 Brunei",
      "🇧🇬 Bulgaria",
      "🇧🇫 Burkina Faso",
      "🇧🇮 Burundi",
      "🇰🇭 Cambodia",
      "🇨🇲 Cameroon",
      "🇨🇦 Canada",
      "🇮🇨 Canary Islands",
      "🇨🇻 Cape Verde",
      "🇧🇶 Caribbean Netherlands",
      "🇰🇾 Cayman Islands",
      "🇨🇫 Central African Republic",
      "🇪🇦 Ceuta & Melilla",
      "🇹🇩 Chad",
      "🇨🇱 Chile",
      "🇨🇳 China",
      "🇨🇽 Christmas Island",
      "🇨🇵 Clipperton Island",
      "🇨🇨 Cocos (Keeling) Islands",
      "🇨🇴 Colombia",
      "🇰🇲 Comoros",
      "🇨🇬 Congo - Brazzaville",
      "🇨🇩 Congo - Kinshasa",
      "🇨🇰 Cook Islands",
      "🇨🇷 Costa Rica",
      "🇨🇮 Côte D’Ivoire",
      "🇭🇷 Croatia",
      "🇨🇺 Cuba",
      "🇨🇼 Curaçao",
      "🇨🇾 Cyprus",
      "🇨🇿 Czechia",
      "🇩🇰 Denmark",
      "🇩🇬 Diego Garcia",
      "🇩🇯 Djibouti",
      "🇩🇲 Dominica",
      "🇩🇴 Dominican Republic",
      "🇪🇨 Ecuador",
      "🇪🇬 Egypt",
      "🇸🇻 El Salvador",
      "🇬🇶 Equatorial Guinea",
      "🇪🇷 Eritrea",
      "🇪🇪 Estonia",
      "🇪🇹 Ethiopia",
      "🇪🇺 European Union",
      "🇫🇰 Falkland Islands",
      "🇫🇴 Faroe Islands",
      "🇫🇯 Fiji",
      "🇫🇮 Finland",
      "🇫🇷 France",
      "🇬🇫 French Guiana",
      "🇵🇫 French Polynesia",
      "🇹🇫 French Southern Territories",
      "🇬🇦 Gabon",
      "🇬🇲 Gambia",
      "🇬🇪 Georgia",
      "🇩🇪 Germany",
      "🇬🇭 Ghana",
      "🇬🇮 Gibraltar",
      "🇬🇷 Greece",
      "🇬🇱 Greenland",
      "🇬🇩 Grenada",
      "🇬🇵 Guadeloupe",
      "🇬🇺 Guam",
      "🇬🇹 Guatemala",
      "🇬🇬 Guernsey",
      "🇬🇳 Guinea",
      "🇬🇼 Guinea-Bissau",
      "🇬🇾 Guyana",
      "🇭🇹 Haiti",
      "🇭🇲 Heard & McDonald Islands",
      "🇭🇳 Honduras",
      "🇭🇰 Hong Kong SAR China",
      "🇭🇺 Hungary",
      "🇮🇸 Iceland",
      "🇮🇳 India",
      "🇮🇩 Indonesia",
      "🇮🇷 Iran",
      "🇮🇶 Iraq",
      "🇮🇪 Ireland",
      "🇮🇲 Isle of Man",
      "🇮🇱 Israel",
      "🇮🇹 Italy",
      "🇯🇲 Jamaica",
      "🇯🇵 Japan",
      "🇯🇪 Jersey",
      "🇯🇴 Jordan",
      "🇰🇿 Kazakhstan",
      "🇰🇪 Kenya",
      "🇰🇮 Kiribati",
      "🇽🇰 Kosovo",
      "🇰🇼 Kuwait",
      "🇰🇬 Kyrgyzstan",
      "🇱🇦 Laos",
      "🇱🇻 Latvia",
      "🇱🇧 Lebanon",
      "🇱🇸 Lesotho",
      "🇱🇷 Liberia",
      "🇱🇾 Libya",
      "🇱🇮 Liechtenstein",
      "🇱🇹 Lithuania",
      "🇱🇺 Luxembourg",
      "🇲🇴 Macau SAR China",
      "🇲🇰 Macedonia",
      "🇲🇬 Madagascar",
      "🇲🇼 Malawi",
      "🇲🇾 Malaysia",
      "🇲🇻 Maldives",
      "🇲🇱 Mali",
      "🇲🇹 Malta",
      "🇲🇭 Marshall Islands",
      "🇲🇶 Martinique",
      "🇲🇷 Mauritania",
      "🇲🇺 Mauritius",
      "🇾🇹 Mayotte",
      "🇲🇽 Mexico",
      "🇫🇲 Micronesia",
      "🇲🇩 Moldova",
      "🇲🇨 Monaco",
      "🇲🇳 Mongolia",
      "🇲🇪 Montenegro",
      "🇲🇸 Montserrat",
      "🇲🇦 Morocco",
      "🇲🇿 Mozambique",
      "🇲🇲 Myanmar (Burma)",
      "🇳🇦 Namibia",
      "🇳🇷 Nauru",
      "🇳🇵 Nepal",
      "🇳🇱 Netherlands",
      "🇳🇨 New Caledonia",
      "🇳🇿 New Zealand",
      "🇳🇮 Nicaragua",
      "🇳🇪 Niger",
      "🇳🇬 Nigeria",
      "🇳🇺 Niue",
      "🇳🇫 Norfolk Island",
      "🇰🇵 North Korea",
      "🇲🇵 Northern Mariana Islands",
      "🇳🇴 Norway",
      "🇴🇲 Oman",
      "🇵🇰 Pakistan",
      "🇵🇼 Palau",
      "🇵🇸 Palestinian Territories",
      "🇵🇦 Panama",
      "🇵🇬 Papua New Guinea",
      "🇵🇾 Paraguay",
      "🇵🇪 Peru",
      "🇵🇭 Philippines",
      "🇵🇳 Pitcairn Islands",
      "🇵🇱 Poland",
      "🇵🇹 Portugal",
      "🇵🇷 Puerto Rico",
      "🇶🇦 Qatar",
      "🇷🇴 Romania",
      "🇷🇺 Russia",
      "🇷🇼 Rwanda",
      "🇷🇪 Réunion",
      "🇼🇸 Samoa",
      "🇸🇲 San Marino",
      "🇸🇦 Saudi Arabia",
      "🇸🇳 Senegal",
      "🇷🇸 Serbia",
      "🇸🇨 Seychelles",
      "🇸🇱 Sierra Leone",
      "🇸🇬 Singapore",
      "🇸🇽 Sint Maarten",
      "🇸🇰 Slovakia",
      "🇸🇮 Slovenia",
      "🇸🇧 Solomon Islands",
      "🇸🇴 Somalia",
      "🇿🇦 South Africa",
      "🇬🇸 South Georgia & South Sandwich Islands",
      "🇰🇷 South Korea",
      "🇸🇸 South Sudan",
      "🇪🇸 Spain",
      "🇱🇰 Sri Lanka",
      "🇧🇱 St. Barthélemy",
      "🇸🇭 St. Helena",
      "🇰🇳 St. Kitts & Nevis",
      "🇱🇨 St. Lucia",
      "🇲🇫 St. Martin",
      "🇵🇲 St. Pierre & Miquelon",
      "🇻🇨 St. Vincent & Grenadines",
      "🇸🇩 Sudan",
      "🇸🇷 Suriname",
      "🇸🇯 Svalbard & Jan Mayen",
      "🇸🇿 Swaziland",
      "🇸🇪 Sweden",
      "🇨🇭 Switzerland",
      "🇸🇾 Syria",
      "🇸🇹 São Tomé & Príncipe",
      "🇹🇼 Taiwan",
      "🇹🇯 Tajikistan",
      "🇹🇿 Tanzania",
      "🇹🇭 Thailand",
      "🇹🇱 Timor-Leste",
      "🇹🇬 Togo",
      "🇹🇰 Tokelau",
      "🇹🇴 Tonga",
      "🇹🇹 Trinidad & Tobago",
      "🇹🇦 Tristan Da Cunha",
      "🇹🇳 Tunisia",
      "🇹🇷 Turkey",
      "🇹🇲 Turkmenistan",
      "🇹🇨 Turks & Caicos Islands",
      "🇹🇻 Tuvalu",
      "🇻🇮 U.S. Virgin Islands",
      "🇺🇬 Uganda",
      "🇺🇦 Ukraine",
      "🇦🇪 United Arab Emirates",
      "🇬🇧 United Kingdom",
      "🇺🇸 United States",
      "🇺🇾 Uruguay",
      "🇺🇿 Uzbekistan",
      "🇻🇺 Vanuatu",
      "🇻🇦 Vatican City",
      "🇻🇪 Venezuela",
      "🇻🇳 Vietnam",
      "🇼🇫 Wallis & Futuna",
      "🇪🇭 Western Sahara",
      "🇾🇪 Yemen",
      "🇿🇲 Zambia",
      "🇿🇼 Zimbabwe",
    ];
  }

  setLanguageName(index, name) {
    const languages = [...this.state.languages];
    languages[index].name = name;
    this.setState({ languages });
  }

  setLanguageIcon(index, icon) {
    const languages = [...this.state.languages];
    languages[index].icon = icon;
    this.setState({ languages });
  }

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
