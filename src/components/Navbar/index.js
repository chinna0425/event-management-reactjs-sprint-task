import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
	};

	return (
		<nav className="navbar">
			<div className="navbar-logo">🎟️ Eventify</div>
			<div className="navbar-user">
				{user && <span className="username">Hello, {user.username}</span>}
				<button onClick={handleLogout} className="logout-btn">
					Logout
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
