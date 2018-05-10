import React from "react";
import { Subscribe } from "unstated";
import Container from "./Container";
import Header from "./Header";
import AvatarBadges from "./AvatarBadges";

export default props => (
  <Subscribe to={[Container]}>
    {profile => {
      let languages = profile.state.languages.filter(lang => lang.name);
      if (languages.length === 0) languages = [{ name: "English", icon: "🇺🇸" }];

      return (
        <div className="p-6 pt-4">
          <Header avatarStyles={profile.state.avatarStyles} />

          <div style={{ maxWidth: "80%" }}>
            <div className="Box bg-blue-lightest px-6 py-4 leading-normal mb-8 animated flash">
              Congratulations! Your profile was created successfully. You can now either ask for
              help or wait and help others.
            </div>

            <h4 className="text-lg italic mb-4">Your profile</h4>

            <div className="bg-brown-lightest rounded-lg p-6 mb-6">
              <strong className="inline-block text-lg italic mb-4">@myusername</strong>

              <em className="opacity-50 float-right text-lg font-bold">This is you</em>

              <AvatarBadges {...profile.state} />

              <textarea
                className="block border-2 px-3 py-2 rounded w-full mb-4"
                placeholder="I need help with…"
                rows={2}
                value={profile.state.helpDescription}
                onChange={e => profile.setHelpDescription(e.target.value)}
              />

              <div className="flex items-center">
                <button
                  onClick={props.showNext}
                  className="flex-none Button text-lg bg-brown-light animated tada"
                >
                  Ask for help
                </button>

                <label className="flex-none select-none ml-4">
                  <input type="checkbox" className="mr-1" /> I’ve read the Code of Conduct
                </label>
              </div>
            </div>
          </div>

          <h4 className="text-lg italic mb-6">Help others</h4>

          <p className="mb-6">It looks like nobody is asking for help at the moment.</p>
        </div>
      );
    }}
  </Subscribe>
);
