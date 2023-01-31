import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import UserTable from "./usersTable";
import api from "../api";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import _ from "lodash";
const Users = ({ users: allUsers, ...rest }) => {
    const pageSize = 8; // мест на странице
    const [currentPage, setCurrentPage] = useState(1); // актив значок на выбранной странице
    const [professions, setProfessions] = useState(api.professions.fetchAll());
    const [selectedProf, useSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" }); // сортировка по имени/профессии
    useEffect(() => {
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
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers;
    const count = filteredUsers.length; // колво пользователей
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]); // задаем параметры через лодаш для сортировки по имени
    const userCrop = paginate(sortedUsers, currentPage, pageSize); // делим
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
                    <UserTable
                        users={userCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                        {...rest}
                    />
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
