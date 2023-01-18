import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
    const count = users.length; // колво пользователей
    const pageSize = 4; // мест на странице
    const [currentPage, setCurrentPage] = useState(1); // актив значок на выбранной странице
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
        console.log("pageIndex", pageIndex);
    }; // при клике получаем номер страницы

    const userCrop = paginate(users, currentPage, pageSize); // делим

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user}></User>
                        ))}
                    </tbody>
                </table>
            )}

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = { users: PropTypes.object.isRequired };
export default Users;
