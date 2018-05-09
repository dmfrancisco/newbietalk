import React from "react";
import { Subscribe } from "unstated";
import ProfileContainer from "./ProfileContainer";
import Header from "./Header";
import AvatarBadges from "./AvatarBadges";

export default () => (
  <Subscribe to={[ProfileContainer]}>
    {profile => {
      let languages = profile.state.languages.filter(lang => lang.name);
      if (languages.length === 0) languages = [{ name: "English", icon: "🇺🇸" }];

      return (
        <div className="p-6 pt-4">
          <Header avatarStyles={profile.state.avatarStyles} />

          <div style={{ maxWidth: "80%" }}>
            <div className="Box bg-purple-lightest px-6 py-4 leading-normal mb-8 animated flash">
              Great! Let’s wait and see if someone’s available to help.
            </div>

            <h4 className="text-lg italic mb-6">Members offering help</h4>

            <p className="mb-8">Waiting for people to show up…</p>

            <h4 className="text-lg italic mb-4">Your profile</h4>

            <div className="bg-brown-lightest rounded-lg p-6 mb-6">
              <strong className="inline-block text-lg italic mb-4">@myusername</strong>

              <em className="opacity-50 float-right text-lg font-bold">This is you</em>

              <AvatarBadges {...profile.state} />

              <textarea
                className="block border-2 px-3 py-2 rounded w-full mb-4 bg-transparent text-black"
                readOnly
                disabled
                rows={3}
                value={profile.state.helpDescription}
                onChange={e => profile.setHelpDescription(e.target.value)}
              />

              <button className="Button Button--disabled text-lg italic" disabled>
                Asking for help…
              </button>
            </div>
          </div>
        </div>
      );
    }}
  </Subscribe>
);
