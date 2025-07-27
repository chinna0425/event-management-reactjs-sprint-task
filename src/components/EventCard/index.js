import "./index.css";

const EventCard = ({ event }) => {
	return (
		<div className="event-card">
			<img src={event.img_url} alt={event.eventName} className="event-image" />
			<div className="event-info">
				<h3 className="event-name">{event.eventName}</h3>
				<p className="event-city">{event.cityName}</p>
				<p className="event-date">{event.date}</p>
			</div>
		</div>
	);
};

export default EventCard;
