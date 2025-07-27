import React, { useEffect, useState } from "react";
import EventCard from "../EventCard";
import "./index.css";
import axios from "axios";

const fallbackImages = [
	"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1475724017904-b712052c192a?auto=format&fit=crop&w=400&q=80",
];
const API_KEY = "FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ=="

const Recommended = () => {
	const [recommended, setRecommended] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://gg-backend-assignment.azurewebsites.net/api/Events?code=${API_KEY}&type=reco`
			)
			.then((res) => {
				// Replace bad image URLs
				console.log("Fetched recommended events:", res.data.events);
				const cleanedEvents = res.data.events.map((event, idx) => {
					return {
						...event,
						img_url: fallbackImages[idx % fallbackImages.length],
					};
				});
				console.log("Cleaned Events:", cleanedEvents);
				setRecommended(cleanedEvents);
			})
			.catch((err) => {
				console.error("Error fetching recommended events", err);
			});
	}, []);

	return (
		<div className="recommended-section">
			<h2>Recommended Shows</h2>
			<div className="recommended-scroll">
				{recommended.map((event, index) => (
					<EventCard key={index} event={event} />
				))}
			</div>
		</div>
	);
};

export default Recommended;
