import {useEffect, useState} from 'react';
import axios from 'axios';
// import Popup from 'reactjs-popup';

import EventCard from '../event-card';
import DeadEnd from '../../../components/DeadEnd';
import Loader from '../../../components/Loader';

import './index.scss';

const EventsContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://staging.events.excelmec.org/api/events')
      .then(res => {
        let events = res.data.filter(event => event.eventType !== "competition")
        setEventsData(events)
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  }, [])

  return isLoading ? (
    <Loader />
  ) : (
    <div className="eventsContainer">
      {eventsData.length === 0 ? (
        <DeadEnd title={'Nothing to see here'} subtitle={'Oops something went wrong :('} />
      ) : (
        eventsData.map((item, id) => <EventCard key={item.id} event={item} />)
      )}
    </div>
  );
};

export default EventsContainer;
