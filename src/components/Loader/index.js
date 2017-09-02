import React from "react"
import { Pulse } from "react-native-loader"
import { View, Text } from "react-native"
import styles from "./styles"

type Props = {
    error: ?string
}

class Component extends React.Component<Props> {
    render() {
        const errorMessage: string = this.props.error || ""
        return (
            <View
                style={styles.container}
            >
                <Text> Loading... </Text>
                <Pulse size={20} color="#bbb" />
                <Text> {errorMessage} </Text>
            </View>
        )
    }
}

export default Component
