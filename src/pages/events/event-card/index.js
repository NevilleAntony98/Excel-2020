import dayjs from 'dayjs';
import {useSpring, animated} from 'react-spring';

import FlipIcon from '../../../components/FlipIcon';

import './index.scss';

const EventCard = ({event}) => {
  const props = useSpring({from: {opacity: 0, marginTop: -50}, to: {opacity: 1, marginTop: 0}});

  return (
    <animated.div style={props}>
      <div className="eventCardContainer">
        <div className="eventCardHeaderBox">
          <FlipIcon url={event.icon} alt={event.name} />
          <span className="eventCardTitle">{event.name}</span>
          <span className="eventCardDate">{dayjs(event.datetime).format('D/M/YYYY')}</span>
        </div>
        <div className="eventInfoBox">
          <span className="eventCardInfo">
            {event.about}</span>
        </div>
      </div>
    </animated.div>
  );
};

export default EventCard;
