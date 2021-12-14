import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = (props) => {
  return (
    <span className="timeline-event">
      <h2 className="event-person">{props.person}</h2>
      <Timestamp time={props.time} className="event-time" />
      <p className="event-status">{props.status}</p>
    </span>
  );
};

export default TimelineEvent;
