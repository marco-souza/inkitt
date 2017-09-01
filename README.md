# Inkitt Test

This test aims to get a html text from an endpoint and transpile the html text into Native Components, **not as a webview**.

For solve this task I used :

- the open-source component `react-native-htmlview` made by **jsdf** in https://github.com/jsdf/react-native-htmlview#install.
- `axios` for http requests

I also made a function to **estimate how much time you will need to read the text**. For this calculation I used the reading speed of **200 wpm** (words per minute), because it's the [speed of an average reader](http://www.readingsoft.com/).

## Commands

- To start a React-Native Server: `npm start`
- To clean the project: `npm run clean`
- To test the project: `npm test`

## Registred App

Generated App in folter `./android/..../`
