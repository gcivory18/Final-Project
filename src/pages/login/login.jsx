import "./login.scss";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

// This page creates the login page that has 2 cards. The left is a description of the page
// The right side is where the user can login using the form for username, password and clicking the login button

const Login = () => {
    const { Login } = useContext(AuthContext);

  const handleLogin = () => {
    Login();
  };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                <h1>Hey There!</h1>
                <p>
                    Welcome to Ivory Social Media! This is my first attempt at creating a multi-page React app. I hope you enjoy it!
                </p>
                <span>Don't have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
                </div>
                <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;