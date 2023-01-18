import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-sign-stop" + (status ? "-fill" : "")}></i>
        </button>
    );
};
BookMark.propTypes = { status: PropTypes.string.isRequired };
export default BookMark;

// " + (status ? "-heart-fill 2rem" : "
