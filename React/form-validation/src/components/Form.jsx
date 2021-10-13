import React, { useReducer } from "react";

const initialState = {
    firstName: {
        value: "",
        error: null,
    },
    lastName: {
        value: "",
        error: null,
    },
    email: {
        value: "",
        error: null,
    },
};

function reducer(state, action) {
    console.log(action);
    return {
        ...state,
        [action.type]: action.payload,
    };
}

const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
};

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const validateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email.value)) {
            return true;
        }
        alert("You have entered an invalid email address!");
        return false;
    };

    function handleChange(e) {
        const { name, value } = e.target;
        const { error } = state[name];
        dispatch({
            type: name,
            payload: {
                value,
                error
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        const {email:{value}}=state;
        validateEmail(value);
    }

    return (
        <div>
            <form style={{ marginTop: "20px" }} onSubmit={e => handleSubmit(e)}>

                <div style={inputDataDivStyle}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                </div>

                {
                    state.firstName.value.length > 0 ? (
                        state.firstName.value.length < 2 ? (
                            <p className="error">First Name must be at least 2 characters</p>
                        ) : null
                    ) : null
                }

                <div style={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                </div>

                {
                    state.lastName.value.length > 0 ? (
                        state.lastName.value.length < 2 ? (
                            <p className="error">Last Name must be at least 2 characters</p>
                        ) : null
                    ) : null
                }

                <div style={inputDataDivStyle}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                </div>

                {
                    state.email.value.length > 0 ? (
                        state.email.value.length < 5 ? (
                            <p className="error">Email must be at least 5 characters</p>
                        ) : null
                    ) : null
                }

                <input type="submit" value="Submit"></input>

            </form>
        </div>
    );
};
