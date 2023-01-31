import React from "react";
import BookMark from "./bookmark";
import PropTypes from "prop-types";
import Qualitie from "./qulitie";
const User = (props) => {
    return (
        <>
            <tr key={props._id}>
                <td>{props.name}</td>
                <td>
                    {props.qualities.map((item) => (
                        <Qualitie {...item} key={item._id} />
                    ))}
                </td>
                <td>{props.profession.name}</td>
                <td>{props.completedMeetings}</td>
                <td>{props.rate}</td>
                <td>
                    <BookMark
                        status={props.bookmark}
                        onClick={() => props.onToggleBookMark(props._id)}
                    />
                </td>
                <td>
                    <button
                        className={"btn btn-danger"}
                        onClick={() => {
                            props.onDelete(props._id);
                        }}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        </>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
