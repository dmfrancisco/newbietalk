import React, { Component, Fragment } from "react";
import { Subscribe } from 'unstated';
import AvatarContainer from "./AvatarContainer";
import Avatar from "../Avatar";

class Screen1 extends Component {  
  handleChange = (avatar, e) => {
    avatar.setStyle(e.target.name, e.target.value);
  }

  render() {
    return (
      <Subscribe to={[AvatarContainer]}>
        {avatar => (
          <div className="p-6 bg-white">
            <div className="w-3/4 mx-auto rounded-lg bg-blue-lightest p-6 mb-6">
              <h4 className="text-lg italic text-center mb-4 tracking-none">Let’s build your avatar…</h4>

              <Avatar
                {...avatar.state}
                className="block mb-4 mx-auto"
              />

              <div className="flex flex-wrap">
                { avatar.getOptions().map((menu) => (
                  <div key={menu.key} className="w-1/2 p-1">
                    <select
                      name={menu.key}
                      className="w-full border-2 h-10 bg-transparent"
                      onChange={(e) => this.handleChange(avatar, e)}
                      value={avatar.state[menu.key]}
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
        )}
      </Subscribe>
    );
  }
}

export default Screen1;
