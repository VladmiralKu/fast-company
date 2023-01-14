import React, {useState} from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = userId =>
        setUsers(users.filter((user)=>user._id!==userId))//вернет все кроме того что удалили, то есть не удаляет а вовращает оставшееся
        const renderPhrace=(number)=>{
            const lastOne = Number(number.toString().slice(-1))
            if(number>4 && number<15) return "человек" ;
            if([2,3,4].indexOf(lastOne)>=0) return "человека";
            if(lastOne===1) return "человек";
        }
    return ( 
        <>
        <h2><span className={"badge bg-"+(users.length>0?"primary":"danger")}>
            {users.length>0 
                ? `${users.length} ${renderPhrace(users.length)} готовы с тобой тусануть`
                : 'никто с тобой не пойдет'}
        </span></h2>
        {users.length>0&&
        <table className="table">
        <thead>
             <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился раз</th>
                <th scope="col">Оценка</th>
            <th/>
          </tr>
        </thead>
        <tbody>
            {users.map(user=>(
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.qualities.map(item=><span className={"badge m-1 bg-"+item.color} key={item._id}>{item.name}</span>)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td><button className={"btn btn-danger"} onClick={()=>{handleDelete(user._id)}}>Удалить</button></td>
                </tr>
            ))}
        </tbody>
      </table>
      }
      </>
  )
};


export default Users;