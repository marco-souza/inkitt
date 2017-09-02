import "react-native"
import React from "react"
import Loader from "../index"

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

describe("Test Loader Component", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<Loader />)
    })

    it("Test Loader with error", () => {
        const errorMessage = "Test",
            tree = renderer.create(<Loader error={errorMessage} />).toJSON()

        expect(tree).toMatchSnapshot()

        // expect(shallow(Loader).contains(innerContent)).toBe(true)
    })

    it("Test without error message", () => {
        const tree = renderer.create(<Loader />).toJSON()

        expect(tree).toMatchSnapshot()

        // expect(shallow(Loader).contains(snp)).toBe(true)
    })
})
