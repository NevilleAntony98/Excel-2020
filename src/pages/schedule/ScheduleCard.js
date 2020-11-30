import dayjs from 'dayjs';
import {useSpring, animated} from 'react-spring';

import FlipIcon from '../../components/FlipIcon';

import './ScheduleCard.scss';

const ScheduleCard = ({event}) => {
  const props = useSpring({from: {opacity: 0, marginTop: -50}, to: {opacity: 1, marginTop: 0}});

  return (
    <animated.div style={props}>
      <div className="scheduleCardContainer">
        <FlipIcon url={event.icon} alt={event.name} />
        <div className="scheduleCardTitle">{event.name}</div>
        <div>{dayjs(event.datetime).format('D/M/YYYY h:mm a')}</div>
      </div>
    </animated.div>
  );
};

export default ScheduleCard;
