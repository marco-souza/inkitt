/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from "react-native"
import HTMLView from "react-native-htmlview"
import axios from "axios"
import styles from "./styles"
import Loader from "./src/components/Loader"

type direction = "" | ""
export default class inkitt extends Component {
    constructor() {
        super()

        // Set Initial State
        this.state = {
            htmlContent: "",
            title: "",
            readingTime: "",
            loaded: false
        }
        this.indexChapter = 1
        this.nextChapter = null
        this.currentChapter = null
        this.prevChapter = null
    }

    /**
   * Estimate how much time an average read will take to read the text
   *
   * @param {number} words
   * @returns {string} "~ # min read"
   * @memberof inkitt
   */
    timeSpent(words) {
        const avgReadingSpeed = 200 // wpm
        return `~ ${Math.round(words / avgReadingSpeed)} min read`
    }

    /**
     * Update this.state with the current Chapter and rerender the activity
     *
     * @memberof inkitt
     */
    async updateStateWithCurrentChapter() {
        await this.haveNextChapter()
        await this.havePrevChapter()
        this.setState({
            htmlContent: this.currentChapter.text,
            title: this.currentChapter.name,
            readingTime: `${this.timeSpent(
                this.currentChapter.words_count
            )}`,
            loaded: true
        })
    }

    /**
     * Check if have any next chapter
     *
     * @returns Promisse
     * @memberof inkitt
     */
    async haveNextChapter() {
        // Try to get the next chapter
        try {
            res = await axios.get( `https://cap_america.inkitt.de/1/stories/106766/chapters/${this.indexChapter + 1}` )
        } catch (error) {
            return this.setState({ haveNextChapter: false })
        }
        // Save the next Chapter, case if exists. Else return false
        if (res.data.error) {
            return this.setState({ haveNextChapter: false })
        }
        this.nextChapter = res.data.response
        return this.setState({ haveNextChapter: true })
    }

    /**
     * Check if have any previous chapter
     *
     * @returns
     * @memberof inkitt
     */
    havePrevChapter() {
        // Try to get the next chapter
        this.setState({ havePrevChapter: this.indexChapter > 1 })
    }

    /**
     * Change to Next or Previos Chapter and Return if have more
     *
     * @param {direction} to
     * @memberof inkitt
     */
    changeTo(to: direction) {
        this.setState({ loaded: false })
        if (to === "next") {
            // Change to next Chapter
            this.indexChapter += 1
            this.prevChapter = this.currentChapter
            this.currentChapter = this.nextChapter
            this.updateStateWithCurrentChapter()
            return
        }

        // Change to prev Chapter
        this.indexChapter -= 1
        this.nextChapter = this.currentChapter
        this.currentChapter = this.prevChapter
        this.updateStateWithCurrentChapter()
    }


    async componentWillMount() {
        // Fetch data
        try {
            res = await axios.get( `https://cap_america.inkitt.de/1/stories/106766/chapters/${this.indexChapter}` )
            this.currentChapter = res.data.response
            // initialize state
            await this.updateStateWithCurrentChapter()
        } catch (e) {
            // Catch Network Error
            this.setState({ error: e.message })
        }
    }

    render() {
        // if not loaded, return Loader, else, render content
        if (!this.state.loaded) return <Loader error={this.state.error} />

        return (
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.readingTime}>
                        {this.state.readingTime}
                    </Text>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <HTMLView
                            value={this.state.htmlContent}
                            stylesheet={styles.htmlContent}
                        />
                    </View>

                    {/* Prev Buttom */}
                    {this.state.havePrevChapter && (
                        <TouchableHighlight
                            style={styles.navigation}
                            onPress={() => {
                                this.changeTo("prev")
                            }}
                        >
                            <Text style={styles.title}> Previous Chapter</Text>
                        </TouchableHighlight>
                    )}
                    {/* Next Buttom */}
                    {this.state.haveNextChapter && (
                        <TouchableHighlight
                            style={styles.navigation}
                            onPress={() => {
                                this.changeTo("next")
                            }}
                        >
                            <Text style={styles.title}>Next Chapter</Text>
                        </TouchableHighlight>
                    )}
                </ScrollView>
            </View>
        )
    }
}

AppRegistry.registerComponent("inkitt", () => inkitt)
