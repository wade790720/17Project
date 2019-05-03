import React from 'react';
import PropTypes from 'prop-types';
import "./style/dialogs.sass"
import Button from "components/Button";
import Item from "components/Item";
import { uniqueKey } from "utils/uniqueKey";

const defaultItems = {
    id: uniqueKey(),
    name: '',
    price: 0,
    remark: ''
}

class Dialogs extends React.Component {
    state = { ...this.props.order }

    componentDidMount() {
        const order = localStorage.getItem(this.props.orderId)
        if (order) this.setState({ items: JSON.parse(order) });
    }

    componentWillUnmount() {
        this.clear();
    }

    addItem = () => {
        this.setState({
            items: [
                ...this.state.items,
                {
                    id: uniqueKey(),
                    name: '',
                    price: 0,
                    remark: ''
                }
            ]
        });
    }

    removeItem = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        });
    }

    save = () => {
        this.props.onSave(this.state);
    }

    clear = () => {
        this.setState({
            id: 0,
            storeName: "",
            items: [{ ...defaultItems }]
        });
    }

    handleChangeStoreName = (e) => {
        this.setState({ storeName: e.target.value });
    }

    handleChangeItem = (newItem) => {
        this.setState({
            items: this.state.items.map(item => (item.id === newItem.id ? newItem : item))
        });
    }

    render() {
        const { storeName, items } = this.state;
        return (
            <div className="dialogs open">
                <div className="dialogs-box">
                    <div className="title">
                        <input type="text" placeholder="Store Name" value={storeName} onChange={this.handleChangeStoreName} />
                    </div>
                    <div className="content">
                        {items.map(item =>
                            <Item
                                key={item.id}
                                item={item}
                                onChange={this.handleChangeItem}
                                onDelete={() => this.removeItem(item.id)}
                            />
                        )}
                    </div>
                    <div className="action">
                        <Button className="success" text="新增" onClick={this.addItem} />
                        <Button className="primary" text="儲存" onClick={this.save} />
                        <Button className="default" text="關閉" onClick={this.props.onCancel} />
                    </div>
                </div>
            </div>
        )
    }
};

export default Dialogs;

Dialogs.defaultProps = {
    order: {
        id: '',
        storeName: '',
        items: [defaultItems],
    },
    onSave: () => { },
    onCancel: () => { }
}
Dialogs.propTypes = {
    order: PropTypes.object,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
}