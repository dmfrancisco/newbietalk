![Newbie Talk logo](https://newbietalk.org/logo.svg)

Newbie Talk lets you privately chat with another person to get code or design help. This is a work-in-progress.

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

---

## Run your own Newbie Talk

### Get started

#### Installing dependencies

After cloning this repository, you need to install Node and then install the npm dependencies:

```
npm install
```

#### Configuring your Firebase account

- Create a free account on [Firebase](https://firebase.google.com/)
- [Visit the console](https://console.firebase.google.com/) and add a new project
- Open your project and open the "Authentication" page
- Click "Set up sign-in method" and then "Email/Password"
- Click "Enable", then also enable "Email link (passwordless sign-in)" and press save
- Open the "Database" page and click "Get Started" in the "Realtime Database" section
- Keep the "Start in locked mode" and click "Enable"
- Run the following command in your local terminal: `npm run build:rules`
- Copy the contents of the "firebase-rules.json" file
- In your browser, open the "Rules" tab and paste the contents
- Click "Publish"
- On the sidebar, click on the cog icon next to "Project Overview" and pick "Project settings"
- Click "Add Firebase to your web app"

You now need to pick some of those configurations and update the `.env.development` file.
It should look something like this but with your own keys:

```bash
# Firebase configs (safe to share publicly)
REACT_APP_FIREBASE_API_KEY=AIzaSyCqkL_FTeo3Eed8iyl7t9zXZ5U2P2drTwU
REACT_APP_FIREBASE_AUTH_DOMAIN=newbie-talk-demo.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://newbie-talk-demo.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=newbie-talk-demo
```

You can learn more about environment variables in the "Setting environment variables" section.

Finally, update the `.firebaserc` file and replace "newbie-talk-demo" with the ID of your Firebase project.

#### Starting the server

Run the following command in your terminal:

```
npm start
```

This command will start the app and should open a new tab in your browser.

#### Authentication and HTTPS

If you try to create a new account you should receive an email.
Once you click the link in the email, it may say 404 Page not found.
This only happens locally in your computer, and you need to replace "https://" with "http://" in order for it to work.

### Deploying and configuring your public server

#### Build and deploy your code to Firebase

There are a couple of settings we need to update the first time you are deploying your code:

- Make sure that the `.firebaserc` file contains the right ID of your Firebase project
- Make a copy of the `.env.development` file and call it `.env.local` or `.env.production.local`
- Update the `REACT_APP_URL` in that `.env` file to match your own firebase domain (eg: `https://your-id.firebaseapp.com`) or custom domain
- Update the `homepage` field in the `package.json` file accordingly

The next step is to login with Firebase in your terminal using:

```
npm run firebase login
```

Finally, you should now be able to deploy your application with:

```
npm run deploy
```

#### Customize the project public-facing name in emails

Go to firebase and on the sidebar, click on the cog icon next to "Project Overview" and pick "Project settings".
Click on the pencil next to "Public-facing name".
This is the displayed on emails that your visitors receive after creating an account with your app.

#### Setting up a job to delete old chats

Once two members finish their chat and click the goodbye button, they are told that the chat will auto-destroy in 48 hours.
This is implemented using a firebase cloud function that you can find in the `functions` folder.
You can deploy it to your own account with the following command:

```
cd functions && npm run deploy
```

If you visit the functions tab in the firebase admin panel, you'll be able to find the URL associated to that function.
It should look something like this:

```
https://us-central1-newbie-talk-demo.cloudfunctions.net/cleanupChats
```

Now you can have a monitor that occasionally "pings" that URL,
or you can have a more refined setup like described
[in this page](https://firebase.googleblog.com/2017/03/how-to-schedule-cron-jobs-with-cloud.html).

### Other tasks

#### Setting environment variables

##### Adding variables

You can add more env variables. Just keep in mind that they need to begin with `REACT_APP_` (for example `REACT_APP_YOUR_VAR`).
These environment variables will be accessible in your code by calling `process.env.REACT_APP_YOUR_VAR`.

Lean more in the [Create React App documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).

##### Multiple environments

You can have the following files:

- `.env`: Default.
- `.env.local`: Local overrides. This file is loaded for all environments except test.
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- npm start: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- npm run build: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- npm test: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

Lean more in the [Create React App documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env).
