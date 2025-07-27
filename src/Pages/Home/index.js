import Hero from "../../components/Hero";
import Recommended from "../../components/Recommended";
import Navbar from "../../components/Navbar";
import Upcoming from "../../components/Upcoming";

import "./index.css";

const Home = () => {
	return (
		<div className="home-page">
			<Navbar />
			<Hero />
			<Recommended />
			<Upcoming />
		</div>
	);
};

export default Home;
