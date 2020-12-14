import dayjs from 'dayjs';
import {useSpring, animated} from 'react-spring';

import FlipIcon from '../../components/FlipIcon';

import './ScheduleCard.scss';

const ScheduleCard = ({event}) => {
  const props = useSpring({from: {opacity: 0, marginTop: -50}, to: {opacity: 1, marginTop: 0}});

  return (
    <animated.div style={props}>
      <div className="scheduleCardContainer">
        <div className="scheduleCardTime">{dayjs(event.datetime).format('h:mm a')}</div>
        <div>
          <div className="scheduleCardTitle">{event.name}</div>
          <div className="scheduleCardEventType">{event.category.split('_').join(' ')}</div>
          {/* <div className="scheduleCardDay">{dayjs(event.datetime).format('D/M/YYYY')}</div> */}
        </div>
        <FlipIcon url={event.icon} alt={event.name} />
      </div>
    </animated.div>
  );
};

export default ScheduleCard;
