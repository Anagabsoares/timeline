import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = (props) => {
  const timelineEventComponents = props.event.map((evt) => {
    return (
      <div className="timeline">
        <TimelineEvent
          person={evt.person}
          status={evt.status}
          time={evt.timestamp}
        />
      </div>
    );
  });
  return <section>{timelineEventComponents}</section>;
};

export default Timeline;
