import { useEffect, useRef, useState, useCallback } from "react";
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

const API_KEY = "FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==";

const Upcoming = () => {
	const [events, setEvents] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const bottomRef = useRef();

	const fetchEvents = useCallback(
		async (pageNo) => {
			setLoading(true);
			try {
				const res = await axios.get(
					`https://gg-backend-assignment.azurewebsites.net/api/Events?code=${API_KEY}&type=upcoming&page=${pageNo}`
				);

				const cleanedEvents = res.data.events.map((event, idx) => {
					return {
						...event,
						img_url:
							fallbackImages[(events.length + idx) % fallbackImages.length],
					};
				});

				setEvents((prev) => [...prev, ...cleanedEvents]);
			} catch (error) {
				console.error("Error loading upcoming events:", error);
			} finally {
				setLoading(false);
			}
		},
		[events.length]
	); // Only re-create fetchEvents if events.length changes

	useEffect(() => {
		fetchEvents(page);
	}, [page, fetchEvents]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setPage((prev) => prev + 1);
				}
			},
			{ threshold: 1 }
		);

		const currentRef = bottomRef.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<div className="upcoming-section">
			<h2>Upcoming Events</h2>
			<div className="upcoming-list">
				{events.map((event, idx) => (
					<div key={idx} className="upcoming-card">
						<img src={event.img_url} alt={event.eventName} />
						<div className="event-info">
							<h4>{event.eventName}</h4>
							<p>
								{event.cityName} • {new Date(event.date).toDateString()}
							</p>
							<p>
								{event.weather} | {parseFloat(event.distanceKm).toFixed(1)} km
								away
							</p>
						</div>
					</div>
				))}
			</div>
			{loading && <p className="loading">Loading more events...</p>}
			<div ref={bottomRef}></div>
		</div>
	);
};

export default Upcoming;
