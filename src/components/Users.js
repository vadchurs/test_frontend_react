import React from 'react';
import './../App.css';

let Users = (props) => {
    const setDescriptionId = (id) => {
        props.setDescriptionId(id)
    }
    let usersArray = props.usersPage.filterUsers.map(u => <tr onClick={() => {
        setDescriptionId(u.phone)
    }} key={u.phone}>
        <td>{u.id}</td>
        <td>{u.firstName}</td>
        <td>{u.lastName}</td>
        <td>{u.email}</td>
        <td>{u.phone}</td>
    </tr>)
    return (
        <section className="section-table">
            <table>
                <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                </tr>
                {usersArray}
            </table>
        </section>
    )
}

export default Users;
