import {useEffect, useState} from 'react';
import axios from 'axios';

import ScheduleCard from './ScheduleCard';

import './ScheduleMain.scss';

const ScheduleMain = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(1);
  const [filteredData, setFilteredData] = useState(scheduleData);

  useEffect(() => {
    axios
      .get('https://staging.apis.excelmec.org/events/api/schedule')
      .then(response => {
        setScheduleData(response.data);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    setFilteredData(scheduleData.find(e => e.day === selectedDay));
  }, [scheduleData, selectedDay]);

  console.log(filteredData);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
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
