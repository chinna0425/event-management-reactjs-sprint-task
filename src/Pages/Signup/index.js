import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Signup = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { username, email, password } = formData;

		if (!username || !email || !password) {
			setError("All fields are required!");
			return;
		}

		const newUser = { username, email, password };
		localStorage.setItem("signup_user", JSON.stringify(newUser));
		navigate("/login");
	};

	return (
		<div className="signup-container">
			<h2>Create Account</h2>
			<form onSubmit={handleSubmit} className="signup-form">
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={handleChange}
				/>
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
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
