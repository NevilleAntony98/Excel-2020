// import dayjs from 'dayjs';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import { useSpring, animated } from 'react-spring';

import EventPopup from '../event-popup';

import FlipIcon from '../../../components/FlipIcon';

import './index.scss';


const EventCard = ({ event }) => {
  const [open, setOpen] = useState(false)
  const props = useSpring({ from: { opacity: 0, marginTop: -50 }, to: { opacity: 1, marginTop: 0 } });

  return (
    <animated.div style={props} onClick={() => setOpen(true)}>
      <div className="eventCardContainer">
        <div className="eventCardHeaderBox">
          <FlipIcon url={event.icon} alt={event.name} />
          <span className="eventCardType">{event.eventType}</span>
          {/* <span className="eventCardDate">{dayjs(event.datetime).format('D/M/YYYY')}</span> */}
        </div>
        <div className="eventInfoBox">
          <span className="eventCardTitle">{event.name}</span>
          <span className="eventCardInfo">
            {event.about.split('.')[0]}.{ event.about.split('.')[1]}.</span>
        </div>
      </div>
      <Popup open={open} onClose={() => setOpen(false)} closeOnDocumentClick closeOnEscape nested>
        <EventPopup
          open={open}
          event={event}
          closeFunc={() => setOpen(false)} />
      </Popup>
    </animated.div>
  );
};

export default EventCard;
