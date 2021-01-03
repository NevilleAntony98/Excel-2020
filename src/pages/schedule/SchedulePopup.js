import {useState} from 'react';

import RadioButton from '../../components/RadioButton';

import closeButton from '../../assets/svg/closeButton.json';

import './SchedulePopup.scss';

const SchedulePopup = ({filters, selectedFilters, setSelectedFilters, close}) => {
  const [selectedCategory, setSelectedCategory] = useState(selectedFilters.category);
  const [selectedEventType, setSelectedEventType] = useState(selectedFilters.eventType);
  //const [selectedEventStatus, setSelectedEventStatus] = useState(selectedFilters.eventStatus);

  return (
    <div className="schedulePopupOuterContainer">
      <div className="schedulePopupContainer">
        <div className="close-container-mobile" onClick={() => close()}>
          <svg className="close-button" viewBox={closeButton.viewBox}>
            <path d={closeButton.path} />
          </svg>
        </div>
        <div className="schedulePopupTitle">Category</div>
        <div className="schedulePopupOptionsContainer">
          <RadioButton
            value="All"
            selected={selectedCategory}
            text="All"
            color="#fff"
            onChange={setSelectedCategory}
          />
          {filters.category.map((item, id) => (
            <RadioButton
              key={id}
              value={item}
              selected={selectedCategory}
              text={item.split('_').join(' ')}
              color="#fff"
              onChange={setSelectedCategory}
            />
          ))}
        </div>
        <div className="schedulePopupTitle">Event type</div>
        <div className="schedulePopupOptionsContainer">
          <RadioButton
            value="All"
            selected={selectedEventType}
            text="All"
            color="#fff"
            onChange={setSelectedEventType}
          />
          {filters.eventType.map((item, id) => (
            <RadioButton
              key={id}
              value={item}
              selected={selectedEventType}
              text={item.split('_').join(' ')}
              color="#fff"
              onChange={setSelectedEventType}
            />
          ))}
        </div>
        {/*      <div className="schedulePopupTitle">Event status</div>
      <div className="schedulePopupOptionsContainer">
        <RadioButton
          value="All"
          selected={selectedEventStatus}
          text="All"
          onChange={setSelectedEventStatus}
          color="#fff"
        />
        {filters.eventStatus.map((item, id) => (
          <RadioButton
            key={id}
            value={item}
            selected={selectedEventStatus}
            text={item.split('_').join(' ')}
            color="#fff"
            onChange={setSelectedEventStatus}
          />
        ))}
      </div>
      */}
        <button
          onClick={() => {
            setSelectedFilters({
              category: selectedCategory,
              eventType: selectedEventType,
              eventStatus: /*selectedEventStatus*/ 'All'
            });
            close();
          }}
          className="schedulePopupButton">
          Go
        </button>
      </div>
    </div>
  );
};

export default SchedulePopup;
