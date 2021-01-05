import {useEffect, useState} from 'react';
import axios from 'axios';

import EventCard from '../event-card';
import DeadEnd from '../../../components/DeadEnd';
import Loader from '../../../components/Loader';

import './index.scss';

const EventsContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://events.excelmec.org/events')
      .then(res => {
        let events = res.data.filter(event => event.eventType !== 'competition');

        let promises = [];
        events.forEach(event => {
          promises.push(axios.get('https://events.excelmec.org/events/' + event.id));
        });

        Promise.all(promises).then(responses => {
          let eventsData = [];
          responses.forEach(response => {
            eventsData.push(response.data);
          });

          setEventsData(eventsData);
          setIsLoading(false);
        });
      })
      .catch(err => console.log(err));
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="eventsContainer">
      {eventsData.length === 0 ? (
        <DeadEnd title={'Nothing to see here'} subtitle={'Oops something went wrong :('} />
      ) : (
        eventsData
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((item, id) => <EventCard key={item.id} event={item} />)
      )}
    </div>
  );
};

export default EventsContainer;
