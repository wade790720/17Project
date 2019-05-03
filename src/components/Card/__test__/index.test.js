import React from "react";
import Card from "../index";
import renderer from "react-test-renderer";

const fakeOrder = {
    id: '',
    storeName: '',
    items: [{ id: '1', name: '', price: 0, remark: '' }]
}
describe('Card tests', () => {
    it("Default view", () => {
        const tree = renderer.create(
            <Card order={fakeOrder} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})