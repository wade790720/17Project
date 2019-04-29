import React from "react";
import Button from "../index";
import renderer from "react-test-renderer";
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Button tests', () => {
    it("Button correct", () => {
        expect(1+1).toBe(2);
    });

    it("Default view", () => {
        const tree = renderer.create(
            <Button />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // shallow render
    it("Check test01", () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Button />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('button');
    });

    // full render
    it("Check test02", () => {
        const testRenderer = renderer.create(<Button text="test"/>);
        const testInstance = testRenderer.root;
        expect(testInstance.findAll(node => node.type === 'button')).toHaveLength(1);
    });
});