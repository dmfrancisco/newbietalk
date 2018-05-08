import React, { Component, Fragment } from "react";
import { Subscribe } from 'unstated';
import ProfileContainer from "./ProfileContainer";
import Modal from "../Modal";
import Avatar from "../Avatar";
import { Help, Cross } from "../Icons";
import HelpBook from "../images/Help";

class Screen1 extends Component {
  render() {
    return (
      <Subscribe to={[ProfileContainer]}>
        {profile => (
          <Fragment>
            <div className="p-6 bg-white">
              <div className="relative w-3/4 mx-auto rounded-lg bg-blue-lightest p-6 mb-6">
                <a href="#" className="absolute block pin-t pin-r m-6"><Help /></a>

                <h4 className="text-lg italic text-center mb-4 tracking-none">Let’s build your avatar…</h4>

                <Avatar
                  {...profile.state.avatarStyles}
                  className="block mb-4 mx-auto"
                />

                <div className="flex flex-wrap">
                  { profile.getAvatarStyleOptions().map((menu) => (
                    <div key={menu.key} className="w-1/2 p-1">
                      <select
                        name={menu.key}
                        className="w-full border-2 h-10 bg-transparent rounded"
                        onChange={(e) => profile.setAvatarStyle(e.target.name, e.target.value)}
                        value={profile.state.avatarStyles[menu.key]}
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

                <select
                  className="block mx-auto w-1/2 border-2 h-10 bg-transparent rounded"
                  onChange={(e) => profile.setPronoun(e.target.value)}
                  value={profile.state.pronoun}
                >
                  { profile.getPronounOptions().map((option) => (
                    <option key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-3/4 mx-auto rounded-lg bg-blue-lightest p-6 mb-6 overflow-hidden">
                <h4 className="text-lg italic text-center mb-4 tracking-none">What languages do you speak?</h4>

                {[0, 1, 2].map((index) => {
                  let placeholder;
                  if (index === 0) placeholder = "1st language…  (e.g. Portuguese)";
                  if (index === 1) placeholder = "Optional: 2nd language…";
                  if (index === 2) placeholder = "Optional: 3rd language…";

                  return (
                    <div key={index} className="flex">
                      <input
                        type="text"
                        onChange={(e) => profile.setLanguageName(index, e.target.value) }
                        value={profile.state.languages[index].name}
                        className="flex-1 border-2 px-3 py-2 h-10 rounded m-1"
                        placeholder={placeholder}
                      />

                      <select
                        className="block border-2 h-10 bg-transparent rounded text-2xl text-center m-1 ml-2"
                        style={{ width: "4rem" }}
                        onChange={(e) => profile.setLanguageIcon(index, e.target.value)}
                        value={profile.state.languages[index].icon}
                      >
                        { profile.getLanguageIconOptions().map((option) => (
                          <option key={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                )}
              </div>
            </div>

            <Modal onDismiss={() => {}} className="pin-b pin-x absolute max-w-xl mx-auto px-15">
              <div className="animated bounceInUp w-1/2">
                <div className="Box bg-purple-lightest mb-6">
                  <button className="Button rounded-full bg-grey-light p-3 -mt-6 -ml-6 float-left">
                    <Cross className="block" />
                  </button>        

                  <h3 className="text-lg italic m-8 mb-4">Let’s build your avatar…</h3>

                  <p className="text-brown leading-normal m-8 mb-6">
                    To keep SmallTalk as anonymous as people want it to be,
                    instead of uploading photo you can create your own Avataaar.
                  </p>

                  <p className="text-brown leading-normal m-8 mt-0">
                    Have a question or feedback? Let us know at{" "}
                    <a href="mailto:david@robo54.com" className="text-inherit">david@robo54.com</a>.
                  </p>
                </div>

                <HelpBook className="block" />
              </div>
            </Modal>
          </Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Screen1;
