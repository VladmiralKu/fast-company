import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-sign-stop" + (status ? "-fill" : "")}></i>
        </button>
    );
};
BookMark.propTypes = { status: PropTypes.bool };
export default BookMark;

// " + (status ? "-heart-fill 2rem" : "
