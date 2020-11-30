import {useState} from 'react';

import RadioButton from '../../components/RadioButton';

import './SchedulePopup.scss';

const SchedulePopup = ({filters, selectedFilters, setSelectedFilters, close}) => {
  const [selectedCategory, setSelectedCategory] = useState(selectedFilters.category);
  const [selectedEventType, setSelectedEventType] = useState(selectedFilters.eventType);
  const [selectedEventStatus, setSelectedEventStatus] = useState(selectedFilters.eventStatus);

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
            text={item.split('_').join(' ')}
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
            text={item.split('_').join(' ')}
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
            text={item.split('_').join(' ')}
            onChange={setSelectedEventStatus}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setSelectedFilters({
            category: selectedCategory,
            eventType: selectedEventType,
            eventStatus: selectedEventStatus
          });
          close();
        }}
        className="schedulePopupButton">
        Go
      </button>
    </div>
  );
};

export default SchedulePopup;
