import './SchedulePopup.scss';

const SchedulePopup = ({filters}) => {
  return (
    <div className="schedulePopupContainer">
      <div className="schedulePopupTitle">Category</div>
      <div className="schedulePopupOptionsContainer">
        <div className="schedulePopupOption">All</div>
        {filters.category.map((item, id) => (
          <div className="schedulePopupOption" key={id}>
            {item}
          </div>
        ))}
      </div>
      <div className="schedulePopupTitle">Event type</div>
      <div className="schedulePopupOptionsContainer">
        <div className="schedulePopupOption">All</div>
        {filters.eventType.map((item, id) => (
          <div className="schedulePopupOption" key={id}>
            {item}
          </div>
        ))}
      </div>
      <div className="schedulePopupTitle">Event status</div>
      <div className="schedulePopupOptionsContainer">
        <div className="schedulePopupOption">All</div>
        {filters.eventStatus.map((item, id) => (
          <div className="schedulePopupOption" key={id}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePopup;
