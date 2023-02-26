import "./Form.modules.css";
import { useState } from "react";
import validateInput from "./validation";

const Form = (props) => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    const handleInputChange = (e) => {
        let target = e.target;
        setUserData({
            ...userData,
            [target.name]: target.value,
        });
        setErrors(validateInput({ ...userData, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="username">
                Username:
            </label>
            <input
                className="input"
                name="username"
                type="text"
                value={userData.username}
                onChange={handleInputChange}
            />
            {errors.username && (
                <label className="danger ">{errors.username}</label>
            )}
            <label htmlFor="password" className="password">
                Password:
            </label>
            <input
                className="input"
                name="password"
                type="password"
                value={userData.password}
                onChange={handleInputChange}
            />
            {errors.password && (
                <label className="danger">{errors.password}</label>
            )}
            <button className="loginBtn">LOGIN</button>
        </form>
    );
};

export default Form;
