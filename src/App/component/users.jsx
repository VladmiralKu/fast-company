import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import User from "./user";
import api from "../api";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
const Users = ({ users: allUsers, ...rest }) => {
    const pageSize = 4; // мест на странице
    const [currentPage, setCurrentPage] = useState(1); // актив значок на выбранной странице
    const [professions, setProfessions] = useState(api.professions.fetchAll());
    const [selectedProf, useSelectedProf] = useState();
    useEffect(() => {
        // console.log("send request");
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    }; // при клике получаем номер страницы
    const handleProfessionSelect = (item) => {
        useSelectedProf(item);
        // console.log("item", item);
    };
    // console.log("selectedProf", selectedProf);
    console.log(
        "allUsers",
        allUsers.filter((user) => console.log(user.profession))
    );
    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers;
    const count = filteredUsers.length; // колво пользователей
    const userCrop = paginate(filteredUsers, currentPage, pageSize); // делим
    const clearFilter = () => {
        useSelectedProf();
    };
    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
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
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired
};
export default Users;
