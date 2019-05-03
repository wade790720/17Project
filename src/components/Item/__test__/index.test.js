import React from "react";
import { shallow } from "enzyme";
import Item from "../index";
import renderer from "react-test-renderer";

describe('Item tests', () => {
    it("Default view", () => {
        const tree = renderer.create(
            <Item />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("toggle function", () => {
        const component = shallow(<Item />);
        component.instance().toggle();
        expect(component.instance().state.hasFocus).toBeTruthy();
        component.instance().toggle();
        expect(component.instance().state.hasFocus).toBeFalsy();
    });
});