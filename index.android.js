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
import styles from "./styles"

export default class inkitt extends Component {

  /**
   * Estimate how much time an average read will take to read the text
   *
   * @param {number} words
   * @returns {string} "~ # min read"
   * @memberof inkitt
   */
  timeSpent(words) {
      const avgSpeedReading = 200 // wpm
      return `~ ${ Math.round( words/(avgSpeedReading) )} min read`
  }

  constructor() {
    super()
    this.state = {
        htmlContent: "",
        title: "loading...",
        words: ""
    }
  }

  componentWillMount() {
    // TODO: mock information for unit test
    // TODO: Make a loader component

    // Fetch data
    axios.get('https://cap_america.inkitt.de/1/stories/106766/chapters/1')
      .then((res) => res.data.response)
      .then((res) => {
        // set state
        this.setState({
          htmlContent: res.text,
          title: res.name,
          words: `${this.timeSpent(res.words_count)}`
        })
      })

  }

  render() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={styles.header}>
                <Text style={styles.title}>{this.state.title}</Text>
                <Text style={styles.words}>{this.state.words}</Text>
            </View>


            <ScrollView>
                <View style={styles.container}>
                    {/* TODO: pass style */}
                    <HTMLView value={this.state.htmlContent} stylesheet={styles.htmlContent} />
                </View>
            </ScrollView>

        </View>
    );
  }
}


AppRegistry.registerComponent('inkitt', () => inkitt);
