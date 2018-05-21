import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Help } from "./Icons";

class PronounBuilder extends Component {
  getPronounOptions() {
    return ["They / Them", "She / Her", "He / Him"];
  }

  render() {
    const { helpUrl, value, onChange } = this.props;

    return (
      <div className="relative w-3/4 mx-auto rounded-lg bg-blue-lightest p-6 mb-6">
        <Link
          to={helpUrl}
          className="absolute block pin-t pin-r m-2 p-2 text-inherit"
        >
          <Help />
        </Link>

        <h4 className="text-lg italic text-center mb-4 tracking-none">
          What is your pronoun?
        </h4>

        <select
          className="block mx-auto w-1/2 border-2 h-10 bg-transparent rounded"
          onChange={e => onChange(e.target.value)}
          value={value}
        >
          {this.getPronounOptions().map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default PronounBuilder;
