# Inkitt Test - React Native Android App


This test aims to get a **html** text from an endpoint and **parse** it to **Native Components, not as webview**.

To solve this task I used :

- the open-source component `react-native-htmlview` made by **jsdf** in https://github.com/jsdf/react-native-htmlview#install.
- `axios` for http requests
- `flow` for typing JavaScript
- `jest` for tests
- `react-native-loader` to create a Pulse Loader Component

![App Preview](https://github.com/marco-souza/inkitt/blob/master/src/assets/gif/app.gif)

## App Features

- **Parse the html text** from `https://cap_america.inkitt.de/1/stories/106766/chapters/1` to **native compoents**.
- **Reading estimative**: a function to **estimate how much time do you will need to read the text**. For this calculation I used the **reading speed of 200 wpm** (words per minute), because it's the [speed of an average reader](http://www.readingsoft.com/)
- **Simple Chapter Navigation**: The app has a **navigation system between chapters**, scroll down until hit the bottom and you will see a button to change to the **next or previous chapter**

## Commands

- To start a React-Native Server: `npm run android`
- To clean the project: `npm run clean`

## Registred App

Generated App in folter `./android/app/build/outputs/apk/app-realease.apk`
