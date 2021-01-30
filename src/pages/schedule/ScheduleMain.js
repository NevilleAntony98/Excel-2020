import {useEffect, useState} from 'react';
// import axios from 'axios';
import Popup from 'reactjs-popup';

import ScheduleCard from './ScheduleCard';
import SchedulePopup from './SchedulePopup';
import DeadEnd from '../../components/DeadEnd';
import Loader from '../../components/Loader';
import schedulejson from '../../data/schedule.json';
import constantsjson from '../../data/scheduleconstants.json';

import filterIcon from '../../assets/svg/filter.svg';
import './ScheduleMain.scss';

const ScheduleMain = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All',
    eventType: 'All',
    eventStatus: 'All'
  });

  useEffect(() => {
    // axios
    //   .all([
    //     axios.get('https://events.excelmec.org/schedule'),
    //     axios.get('https://events.excelmec.org/constants')
    //   ])
    //   .then(
    //     axios.spread((response1, response2) => {
    //       setScheduleData(response1.data);
    //       setFilters(response2.data);
    //       setIsLoading(false);
    //     })
    //   )
      setScheduleData(schedulejson);
      setFilters(constantsjson);
      setIsLoading(false);
      // .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if (scheduleData.length !== 0) {
      let x = scheduleData.find(e => e.day === selectedDay);
      if (x) {
        x = x.events;
        if (selectedFilters.category !== 'All') {
          x = x.filter(e => e.category === selectedFilters.category);
        }
        if (selectedFilters.eventType !== 'All') {
          x = x.filter(e => e.eventType === selectedFilters.eventType);
        }
        if (selectedFilters.eventStatus !== 'All') {
          x = x.filter(e => e.eventStatus === selectedFilters.eventStatus);
        }
      } else {
        // **** backend guys for not sending data for day 1
        setSelectedDay(scheduleData[0].day);
      }
      setFilteredData({day: selectedDay, events: x});
    } else {
      // **** backend guys for sending empty datas
      setFilteredData({day: selectedDay, events: []});
    }
  }, [scheduleData, selectedDay, selectedFilters]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="schedule">
      <div className="scheduleContainer">
        <Popup
          trigger={
            <div className="scheduleFilter">
              <span className="scheduleFilterInsensitive" />
              <div className="scheduleFilterSensitive">
                <img src={filterIcon} alt="filter" height="20px" width="20px" />
                Filter
              </div>
            </div>
          }>
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
              className={
                item.day === selectedDay
                  ? 'scheduleSelectedDay backdrop-filter-blur'
                  : 'scheduleDay backdrop-filter-blur'
              }
              key={id}
              onClick={() => setSelectedDay(item.day)}>
              Day {item.day}
            </div>
          ))}
        </div>
        <div>
          {filteredData.length === 0 || filteredData.events.length === 0 ? (
            <DeadEnd
              title={'Nothing to see here'}
              subtitle={'Chose a different category to view more events!'}
            />
          ) : (
            filteredData.events.map(item => <ScheduleCard event={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleMain;
