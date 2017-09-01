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
            // paddingTop: 20,
            // paddingBottom: 20,
        },
        title: {
            fontSize: 20,
            textAlign: "center"
        },
        readingTime: {
            fontSize: 8,
            textAlign: "center"
        },
        header: {
            backgroundColor: "#F5FCFF",
            padding: 5,
            width: "100%"
            // Border
            // borderWidth: 1,
            // borderRadius: 1,
            // borderColor: '#ddd',
            // borderBottomWidth: 0,
            // Shadow
            // shadowColor: '#000',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 2,
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
