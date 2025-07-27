import banner from "../../assets/bannerImage.png";
import "./index.css";

const Hero = () => {
	return (
		<div className="hero">
			<img src={banner} alt="Banner" className="hero-banner" />
			<div className="hero-text">
				<h1 className="hero-title">Discover Exciting Events Around You</h1>
				<p className="hero-subtitle">
					Recommended shows and upcoming events tailored just for you.
				</p>
			</div>
		</div>
	);
};

export default Hero;
