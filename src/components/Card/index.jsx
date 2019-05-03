import React from 'react';
import cx from "classnames";
import PropTypes from 'prop-types';
import "./style/card.sass"

const randomIcon = [
    "https://img.icons8.com/cotton/64/000000/-takeaway-hot-drink.png",
    "https://img.icons8.com/cotton/64/000000/coffee-to-go.png",
    "https://img.icons8.com/cotton/64/000000/tea-1.png",
    "https://img.icons8.com/cotton/64/000000/soda-bottle.png",
    "https://img.icons8.com/cotton/64/000000/soda-cup.png",
    "https://img.icons8.com/cotton/64/000000/cafe.png",
    "https://img.icons8.com/cotton/64/000000/orange-soda-bottle.png",
    "https://img.icons8.com/cotton/64/000000/cola.png",
    "https://img.icons8.com/cotton/64/000000/alcoholic-cocktail.png"
]

const sumPrice = list => {
    return list.reduce((prev, current) => prev + parseInt(current.price), 0);
};

const Card = (props) => {
    const { className, order, ...otherProps } = props;
    return (
        <div className={cx("card", className)} {...otherProps}>
            <img className="icon" src={randomIcon[props.index % randomIcon.length]}></img>
            <div className="name">{order.storeName}</div>
            <div className="price">{sumPrice(order.items) > 1000000 ? "too many" : "$" + sumPrice(order.items)}</div>
        </div>
    );
};

export default Card;

Card.defaultProps = {
    index: -1,
    order: {},
    onClick: () => { }
}
Card.propTypes = {
    index: PropTypes.number,
    order: PropTypes.object,
    onClick: PropTypes.func
}