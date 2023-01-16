import React from "react";
import BookMark from "./bookmark";
// console.log(one);
const User = (props) => {
  return (
    <>
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>
          {props.qualities.map((item) => (
            <span className={"badge m-1 bg-" + item.color} key={item._id}>
              {item.name}
            </span>
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

export default User;
