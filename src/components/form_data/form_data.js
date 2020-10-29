import React, {useState} from 'react';

const Results = props => {
    const {fName, lName, email, password, cPassword} = props.user

    return (
        <div>
            <h3>Your Form Data</h3>
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cPassword}</p>
        </div>
    )
}

export default Results




