import React from 'react'
import './../App.css';



let DescriptionUser = (props) => {
    const setDescriptionId = (id) => {
        props.setDescriptionId(id)
    }

    let user = props.usersPage.users.find(item => item.phone === props.usersPage.descriptionID);
  return (
      <>
          {user &&
      <section className="section-description">
          <div>
              <div>Id: {user.id}</div>
              <div>FirstName: {user.firstName}</div>
              <div>LastName: {user.lastName}</div>
              <div>StreetAddress: {user.address.streetAddress}</div>
              <div>City: {user.address.city}</div>
              <div>State: {user.address.state}</div>
              <div>Description: {user.description}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
          </div>
          <span className = "close" onClick={()=>{setDescriptionId(null)}}>&times;</span>
      </section>}
      </>
  );
}

export default DescriptionUser;
