import React, { useState } from "react";
import Users from "./component/users";
import API from "./api/index";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handleDelete = (id) => {
        const deleteUser = users.filter((c) => c._id !== id);
        setUsers(deleteUser);
    }; // вернет все кроме того что удалили, то есть не удаляет а вовращает оставшееся
    const handleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (id === user._id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <div>
            <Users
                onDelete={handleDelete}
                users={users}
                onToggleBookMark={handleBookMark}
            />
        </div>
    );
}

export default App;
