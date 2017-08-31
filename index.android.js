/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { AppRegistry, StyleSheet, Text, View, ScrollView } from "react-native"
import HTMLView from "react-native-htmlview"
import axios from "axios"
import styles from "./styles"
import Loader from "./src/components/Loader"

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
        return `~ ${Math.round(words / avgSpeedReading)} min read`
    }

    constructor() {
        super()

        // Set Initial State
        this.state = {
            htmlContent: "",
            title: "",
            words: "",
            loaded: false
        }
    }

    componentWillMount() {
        // TODO: mock information for unit test

        // Fetch data
        axios
            .get("https://cap_america.inkitt.de/1/stories/106766/chapters/1")
            .then(res => res.data.response)
            .then(res => {
                // set state
                this.setState({
                    htmlContent: res.text,
                    title: res.name,
                    words: `${this.timeSpent(res.words_count)}`,
                    loaded: true
                })
            })
            // Catch Network Error
            .catch((e: Error) => {
                this.setState({
                    error:  e.message
                })
            })
    }

    render() {
        // if not loaded, return Loader, else, render content
        if (!this.state.loaded) return <Loader error={this.state.error} />

        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.words}>{this.state.words}</Text>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <HTMLView
                            value={this.state.htmlContent}
                            stylesheet={styles.htmlContent}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

AppRegistry.registerComponent("inkitt", () => inkitt)
