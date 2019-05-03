import React from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import "./style/button.sass"

const Button = (props) => {
    const { className, circle, text, ...otherProps } = props;
    return (
        <button className={cx("btn", { "btn-circle": circle }, className)} {...otherProps}>
            {circle && <img src="https://img.icons8.com/android/24/000000/plus.png" />}
            {text}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    circle: false,
    text: ''
}
Button.propTypes = {
    circle: PropTypes.bool,
    text: PropTypes.string
}