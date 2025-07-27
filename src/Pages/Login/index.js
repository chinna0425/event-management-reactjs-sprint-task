import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import "./index.css";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = formData;
		const storedUser = JSON.parse(localStorage.getItem("signup_user"));

		if (!email || !password) {
			setError("All fields are required!");
			return;
		}

		if (
			!storedUser ||
			storedUser.email !== email ||
			storedUser.password !== password
		) {
			setError("Invalid email or password!");
			return;
		}

		dispatch(loginSuccess(storedUser));
		navigate("/");
	};

	return (
		<div className="login-container">
			<h2>Login</h2>
			<form onSubmit={handleSubmit} className="login-form">
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
				/>
				{error && <p className="error">{error}</p>}
				<button type="submit">Login</button>
			</form>
			<p className="signup-link">
				Don't have an account? <Link to="/signup">Sign up</Link>
			</p>
		</div>
	);
};

export default Login;
