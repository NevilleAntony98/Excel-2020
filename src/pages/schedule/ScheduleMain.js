import {useEffect, useState} from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

import ScheduleCard from './ScheduleCard';
import SchedulePopup from './SchedulePopup';

import './ScheduleMain.scss';

const ScheduleMain = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(1);
  const [filteredData, setFilteredData] = useState(scheduleData);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get('https://staging.apis.excelmec.org/events/api/schedule'),
        axios.get('https://staging.apis.excelmec.org/events/api/constants')
      ])
      .then(
        axios.spread((response1, response2) => {
          setScheduleData(response1.data);
          setFilters(response2.data);
          setIsLoading(false);
        })
      )
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    setFilteredData(scheduleData.find(e => e.day === selectedDay));
  }, [scheduleData, selectedDay]);

  console.log(filteredData);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="scheduleContainer">
      <Popup trigger={<div className="scheduleFilterText">Filter</div>}>
        <SchedulePopup filters={filters} />
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
      {filteredData.events.map((item, id) => (
        <ScheduleCard key={item.id} event={item} />
      ))}
    </div>
  );
};

export default ScheduleMain;
