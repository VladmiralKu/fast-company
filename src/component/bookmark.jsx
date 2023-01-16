import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <button {...rest}>
      <i className={"bi bi-sign-stop" + (status ? "-fill" : "")}></i>
    </button>
  );
};

export default BookMark;

// " + (status ? "-heart-fill 2rem" : "
