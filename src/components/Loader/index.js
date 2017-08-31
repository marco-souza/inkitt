import React from "react"
import { Pulse } from "react-native-loader"
import { View, Text } from "react-native"

type Props = {
    error: ?string
}

class Component extends React.Component<Props> {
    render() {
        const errorMessage: string = this.props.error || ""
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text> Loading... </Text>
                <Pulse size={20} color="#bbb" />
                <Text> {errorMessage} </Text>
            </View>
        )
    }
}

export default Component
