
# Demo App

This is a repository containing a demo application with a login UI and basic validation along with the feature of keeping the submit button disabled until all the input fields are validated.

Necessary set-up instructions are provided below assuming one have react-native devolopment environment ready.

## Installation instructions:

1. Clone the repository
```
git clone git@github.com:ishrak-imam/demoapp.git
```

2. Install dependencies
```
yarn install

or

npm install
```

3. Start JS packager server in seperate terminal tab
```
react-native start
```

4. Run on emulator
```
react-native run android

or

react-native run ios
```

## Usage instructions

After running the app a login screen will appear with fields for username and password. As no network call is made for this demoapp a set id username and password is checked statically inside the codebase.

`username: some_user`

`password: 12345`

using the above credentials will generate a login successfull alert and otherwise show error message accordingly.

# Question-Answer

### Q1. How would you communicate with a backend exposing a rest-Api?
- In order to communicate with a backend exposing rest api an http post request can be made to the backend by using `fetch` or `axios` or plain `XMLHttpRequest`. As thoese are asynchronus in nature generator function based library like `redux-saga` can be used to handle async operations along with redux for state management.

### Q2. How would you visually indicate that the call to the backend is in progress?
- This can be managed with the use of state either locally inside the component or with a state management library like `redux`. The basic idea is whenever a login request is made a loading flag can be changed to true through state chnage in the component and inside the `render` function necessary login will interecept the change and display a loader visually as state change causes a rerender. After the response arrives i.e the async operation completes another state change will be initiated changing the loading flag to false and respective response message will be displayed in the UI.

### Q3. How would you keep track of a logged-in user?
- Considering JWT approach is followed in
authenticating a user when a jwt token is received afte successful login it can kept stored in the `AsyncStorage` which can persist data even after the app is closed. When the app is opened again first thing to do is retrieve the token from AsyncStorage and extract the payload(user id) from the token and make a request to backend to get further user information and store user data along with the toke in redux or any other state management library for later use and send token with any further request to the backend. There are other options too, like `Realm` to persist data inside the app for later use.


# Further instructions

In case react-native development environment is not ready I am also including an apk file which one can be installed in an android device and checked.

Also I need to mention that using `create-react-native-app` or `expo` limits us to only use the JavaScript based solutions. As in most of the cases for a production level application using the native modules are necessary for a smooth user friendly experience. That's why I tend to use `react-native init` for initializing my project.