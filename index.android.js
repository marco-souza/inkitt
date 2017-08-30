/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import HTMLView from "react-native-htmlview";
import axios from "axios"

export default class inkitt extends Component {

  constructor() {
    super()
    this.state = { htmlContent: "<b>loading...</b>", title: "" }
  }

  componentWillMount() {

    // Fetch data
    axios.get('https://cap_america.inkitt.de/1/stories/106766/chapters/1')
      .then((res) => res.data.response)
      .then((res) => {
        // set state
        this.setState({
          htmlContent: res.text,
          title: res.name
        })
      })

  }

  render() {
    return <View style={styles.container}>
        <Text style={styles.titile}>{this.state.title}</Text>

        <ScrollView>
          {/* TODO: pass style */}
          <HTMLView value={this.state.htmlContent} stylesheet={styles.htmlContent} />
        </ScrollView>
      </View>;
  }
}

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  titile: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
}), {

  htmlContent: {
    a: {
        color: "#08f"
    },
    p: {
        textAlign: "justify",
        marginBottom: 5,
    }
  }

});

AppRegistry.registerComponent('inkitt', () => inkitt);
