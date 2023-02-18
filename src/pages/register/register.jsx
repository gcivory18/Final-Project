import "./register.scss";
import {Link} from "react-router-dom";

// This page creates the register page that also has 2 cards, one side allows the user to register for an account and the other side 
// allows the user to login if they already have an account

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                <h1>Ivory Social Media</h1>
                <p>
                    Welcome to my social media platform! This is my first attempt at creating a multi-page React app. I hope you enjoy it!
                </p>
                <span>Do you have an account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
                </div>
                <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Your Name" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;