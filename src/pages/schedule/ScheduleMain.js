import {useEffect, useState} from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

import ScheduleCard from './ScheduleCard';
import SchedulePopup from './SchedulePopup';

import './ScheduleMain.scss';

const ScheduleMain = () => {
  const [scheduleData, setScheduleData] = useState({day: 1, events: []});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(1);
  const [filteredData, setFilteredData] = useState({day: 1, events: []});
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All',
    eventType: 'All',
    eventStatus: 'All'
  });

  useEffect(() => {
    axios
      .all([
        axios.get('https://staging.apis.excelmec.org/events/api/schedule'),
        axios.get('https://staging.apis.excelmec.org/events/api/constants')
      ])
      .then(
        axios.spread((response1, response2) => {
          setFilters(response2.data);
          setScheduleData(response1.data);
          setIsLoading(false);
        })
      )
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      let x = scheduleData.find(e => e.day === selectedDay).events;
      if (selectedFilters.category !== 'All') {
        x = x.filter(e => e.category === selectedFilters.category);
      }
      if (selectedFilters.eventType !== 'All') {
        x = x.filter(e => e.eventType === selectedFilters.eventType);
      }
      if (selectedFilters.eventStatus !== 'All') {
        x = x.filter(e => e.eventStatus === selectedFilters.eventStatus);
      }
      setFilteredData({day: selectedDay, events: x});
    }
  }, [scheduleData, selectedDay, selectedFilters, isLoading]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="scheduleContainer">
      <Popup trigger={<div className="scheduleFilterText">Filter</div>}>
        {close => (
          <SchedulePopup
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            close={close}
          />
        )}
      </Popup>
      <div className="scheduleDayContainer">
        {scheduleData.map((item, id) => (
          <div
            className={item.day === selectedDay ? 'scheduleSelectedDay' : 'scheduleDay'}
            key={id}
            onClick={() => setSelectedDay(item.day)}>
            Day {item.day}
          </div>
        ))}
      </div>
      {filteredData.events.length === 0 ? (
        <div>Empty</div>
      ) : (
        filteredData.events.map((item, id) => <ScheduleCard key={item.id} event={item} />)
      )}
    </div>
  );
};

export default ScheduleMain;