import React from 'react';
import cx from "classnames";
import PropTypes from 'prop-types';

import "./style/item.sass"

class Item extends React.Component {
    state = { hasFocus: false }

    toggle = () => {
        this.setState({ hasFocus: !this.state.hasFocus });
    }

    handleChange = (target, e) => {
        let data = { ...this.props.item };
        data = {
            ...data,
            [target]: e.target.value
        };
        this.props.onChange(data);
    }

    render() {
        const { item, disabled } = this.props;
        return (
            <div className={cx("item", { "focus": this.state.hasFocus }, { "disabled": disabled })}>
                <input type="text" value={item.name} onChange={e => this.handleChange("name", e)} onFocus={this.toggle} onBlur={this.toggle} placeholder="Name" disabled={disabled} />
                <input type="number" value={item.price} onChange={e => this.handleChange("price", e)} onFocus={this.toggle} onBlur={this.toggle} placeholder="Price" disabled={disabled} />
                <input type="text" value={item.remark} onChange={e => this.handleChange("remark", e)} onFocus={this.toggle} onBlur={this.toggle} placeholder="Remark" disabled={disabled} />
                <div className="remove" onClick={this.props.onDelete} />
            </div>
        );
    }

};

export default Item;

Item.defaultProps = {
    item: {},
    disabled: false,
    onChange: () => { },
    onDelete: () => { }
}
Item.propTypes = {
    item: PropTypes.object,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
}