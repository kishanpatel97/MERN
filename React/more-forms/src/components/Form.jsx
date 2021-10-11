import React, { useState } from "react";

// We will use an onChange synthetic event to capture into state
//    each character as it is typed

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formDataDivStyle = {
        textAlign: "left",
        width: "450px",
        margin: "auto",
    };

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    };

    return (
        <div>
            <form style={{ marginTop: "20px" }}>
                <div style={inputDataDivStyle}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                {/* Ternary operators allow for conditional rendering */}
                {/* They can be nested "inside" each other - every ? needs a matching : */}
                {/* Returning null will prevent adding any element to the DOM */}
                {/* Sensei Bonus: Check for length of 0 to prevent showing error on empty inputs */}
                {firstName.length > 0 ? (
                    firstName.length < 2 ? (
                        <p className="error">First Name must be at least 2 characters</p>
                    ) : null
                ) : null}
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                {lastName.length > 0 ? (
                    lastName.length < 2 ? (
                        <p className="error">Last Name must be at least 2 characters</p>
                    ) : null
                ) : null}
                <div style={inputDataDivStyle}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length > 0 ? (
                    email.length < 5 ? (
                        <p className="error">Email must be at least 5 characters</p>
                    ) : null
                ) : null}
                <div style={inputDataDivStyle}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {password.length > 0 ? (
                    password.length < 8 ? (
                        <p className="error">Password must be at least 8 characters</p>
                    ) : null
                ) : null}
                {/* display the error here if the passwords do not match */}
                {password.length >= 8 && confirmPassword.length > 0 ? (
                    password !== confirmPassword ? (
                        <p className="error">Passwords do not match</p>
                    ) : null
                ) : null}

                <div style={inputDataDivStyle}>
                    <label htmlFor="confirmPassord">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </form>

            {/* Display the values held in state - they will update as you type */}
            <div style={formDataDivStyle}>
                <h3 style={{ textAlign: "center" }}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>
                    {firstName}
                </p>
                <p>
                    <label>Last Name: </label>
                    {lastName}
                </p>
                <p>
                    <label>Email: </label>
                    {email}
                </p>
                <p>
                    <label>Password: </label>
                    {password}
                </p>
                <p>
                    <label>Confirm Password: </label>
                    {confirmPassword}
                </p>
            </div>
        </div>
    );
};

export default Form;