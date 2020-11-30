import {useState} from 'react';

import RadioButton from '../../components/RadioButton';

import './SchedulePopup.scss';

const SchedulePopup = ({filters}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEventType, setSelectedEventType] = useState('All');
  const [selectedEventStatus, setSelectedEventStatus] = useState('All');

  return (
    <div className="schedulePopupContainer">
      <div className="schedulePopupTitle">Category</div>
      <div className="schedulePopupOptionsContainer">
        <RadioButton value="All" selected={selectedCategory} text="All" onChange={setSelectedCategory} />
        {filters.category.map((item, id) => (
          <RadioButton
            key={id}
            value={item}
            selected={selectedCategory}
            text={item}
            onChange={setSelectedCategory}
          />
        ))}
      </div>
      <div className="schedulePopupTitle">Event type</div>
      <div className="schedulePopupOptionsContainer">
        <RadioButton value="All" selected={selectedEventType} text="All" onChange={setSelectedEventType} />
        {filters.eventType.map((item, id) => (
          <RadioButton
            key={id}
            value={item}
            selected={selectedEventType}
            text={item}
            onChange={setSelectedEventType}
          />
        ))}
      </div>
      <div className="schedulePopupTitle">Event status</div>
      <div className="schedulePopupOptionsContainer">
        <RadioButton
          value="All"
          selected={selectedEventStatus}
          text="All"
          onChange={setSelectedEventStatus}
        />
        {filters.eventStatus.map((item, id) => (
          <RadioButton
            key={id}
            value={item}
            selected={selectedEventStatus}
            text={item}
            onChange={setSelectedEventStatus}
          />
        ))}
      </div>
      <button onClick={() => {}} className="schedulePopupButton">
        Go
      </button>
    </div>
  );
};

export default SchedulePopup;
