import { StyleSheet } from "react-native"
/**
 * Styles used on the application
 */
const styles = Object.assign(
    {},
    StyleSheet.create({
        container: {
            backgroundColor: "#F5FCFF",
            padding: 10
        },
        body: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#F5FCFF"
        },
        title: {
            fontSize: 20,
            textAlign: "center"
        },
        readingTime: {
            fontSize: 8,
            textAlign: "center"
        },
        navigation: {
            backgroundColor: "#F5FCFF",
            padding: 5
        },
        header: {
            backgroundColor: "#F5FCFF",
            padding: 5,
            width: "100%"
        }
    }),
    {
        htmlContent: {
            a: {
                color: "#08f"
            },
            p: {
                textAlign: "justify",
                marginBottom: 5
            }
        }
    }
)

export default styles
