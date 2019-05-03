import React from "react";
import Button from "../index";
import renderer from "react-test-renderer";

describe('Button tests', () => {
    it("Default view", () => {
        const tree = renderer.create(
            <Button />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});