![Small Talk logo](https://cdn.glitch.com/fe7cff61-183f-4cbc-bbca-80e4e664896f%2Fsmalltalk.svg?1525948269989)

Small Talk lets you privately chat with another person to get code or design help. This is a work-in-progress.

### Remixing in Glitch

To make the auto-reload feature work:

* Disable the "Refresh App on Changes" checkbox in your user menu (top right).

### About this prototype

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) (CRA). Visit [their repository](https://github.com/facebookincubator/create-react-app) for more information and help.

### Changes made to the original CRA boilerplate

Changes that were done to better integrate with Glitch:

* The `.env.development` file contains `DANGEROUSLY_DISABLE_HOST_CHECK=true` to fix the "Invalid host header" message that shows up, related to the development server.
* A custom `watch.json` file was added so that the server doesn't restart when you make changes.
* The `start` script in the `package.json` file was changed. If you run `npm run build` using the **Logs > Console** and then swap the `_start` script with `start`, then Glitch will serve the production build version of your app. You may also need to swap `_dependencies` with `dependencies`.
