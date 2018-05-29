import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flag, FlagPicker } from "./Flags";
import { Help, Down } from "./Icons";

class LanguagesBuilder extends Component {
  state = { pickerVisible: false };

  handleIconClick = (e, index) => {
    e.preventDefault();

    const pickerVisible = this.state.pickerVisible !== false ? false : index;
    this.setState({ pickerVisible });
  };

  handleIconSelect = (index, emoji) => {
    this.props.onIconChange(index, emoji.id);
    this.setState({ pickerVisible: false });
  };

  render() {
    const {
      helpUrl,
      value,
      onNameChange,
      className = "",
      style = {},
    } = this.props;

    const { pickerVisible } = this.state;

    return (
      <div
        className={`relative mx-auto rounded-lg bg-blue-lightest p-6 mb-6 ${className}`}
        style={style}
      >
        <Link
          to={helpUrl}
          className="absolute block pin-t pin-r m-2 p-2 text-inherit"
        >
          <Help />
        </Link>

        <h4 className="text-lg italic text-center mb-4 tracking-none">
          What languages do you speak?
        </h4>

        {[0, 1, 2].map(index => {
          let placeholder;

          if (index === 0) placeholder = "1st language…  (e.g. Portuguese)";
          if (index === 1) placeholder = "Optional: 2nd language…";
          if (index === 2) placeholder = "Optional: 3rd language…";

          const language = value[index] || {
            name: "",
            icon: "waving_white_flag",
          };

          return (
            <div key={index} className="flex">
              <input
                type="text"
                onChange={e => onNameChange(index, e.target.value)}
                value={language.name}
                className="flex-1 w-full border-2 px-3 py-2 h-10 rounded m-1"
                placeholder={placeholder}
              />

              <div className="relative flex-none">
                <button
                  className="flex items-center justify-center border-2 border-black h-10 rounded text-2xl m-1 ml-2 leading-none"
                  style={{ width: "4rem" }}
                  onClick={e => this.handleIconClick(e, index)}
                >
                  <Flag emoji={language.icon} />
                  <Down className="ml-1" />
                </button>

                {pickerVisible === index && (
                  <FlagPicker
                    style={{ top: "3rem", right: 0, marginBottom: "1rem" }}
                    onSelect={emoji => this.handleIconSelect(index, emoji)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LanguagesBuilder;
