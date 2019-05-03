import React from "react";
import { shallow } from "enzyme";
import Dialogs from "../index";
import renderer from "react-test-renderer";

const fakeOrder = {
    id: '',
    storeName: '',
    items: [{ id: '1', name: '', price: 0, remark: '' }]
}

describe('Dialogs tests', () => {
    it("Default view", () => {
        const tree = renderer.create(
            <Dialogs />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("no data view", () => {
        const order = { id: 'abc', storeName: 'abb', items: [] }
        const tree = renderer.create(
            <Dialogs order={order} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('addItem function test', () => {
        const component = shallow(<Dialogs />);
        component.instance().addItem();
        expect(component.instance().state.items.length).toBe(2);
        expect(component.instance().state.items[0].id).not.toBe("");
        expect(component.instance().state.items[1].id).not.toBe("");
        expect(component.instance().state.items[0]).toEqual(expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            price: expect.any(Number),
            remark: expect.any(String)
        }));
    });

    it('removeItem function test', () => {
        const component = shallow(<Dialogs order={fakeOrder} />);
        expect(component.instance().state.items.length).toBe(1)
        component.instance().removeItem("1");
        expect(component.instance().state.items.length).toBe(0)
    });

    it('handleChangeStoreName function test', () => {
        const component = shallow(<Dialogs />);
        component.find(".title input").simulate("change", {
            target: { value: 'StoreName' }
        });
        expect(component.instance().state.storeName).toBe("StoreName");
    });

    it('handleChangeItem function test', () => {
        const component = shallow(<Dialogs order={fakeOrder} />);
        const data = {
            id: '1',
            name: 'wade',
            price: 0,
            remark: ''
        };
        component.instance().handleChangeItem(data);
        expect(component.instance().state.items[0].name).toBe(data.name);
    });
});