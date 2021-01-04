import dayjs from 'dayjs';
// import {useSpring, animated} from 'react-spring';

// import FlipIcon from '../../components/FlipIcon';
import {useEffect, useState} from 'react';
import './ScheduleCard.scss';

import excelIcon from '../../assets/png/excel2020.png';

const FlipScheduleImage = ({event}) => {
  const [isLoading, setIsLoading] = useState(true);
  const img = new Image();

  useEffect(() => {
    img.src = event.icon;
    img.onload = () => setIsLoading(false);
  });

  if (isLoading) return <img className="scheduleflipIcon" src={excelIcon} alt={event.name} />;

  return (
    // <Spring
    // from={{transform: 'rotateY(360deg)'}}
    // to={{transform: 'rotateY(0deg)'}}
    // config={{tension: 200, friction: 40}}>
    // {props => (
    // <div style={props}>
    <div className="scheduleflipIconbg">
      <img className="scheduleflipIcon" src={event.icon} alt={event.name} />
    </div>
    // )}
    // </Spring>
  );
};

const ScheduleCard = ({event}) => {
  // const props = useSpring({from: {opacity: 0, marginTop: -50}, to: {opacity: 1, marginTop: 0}});

  return (
    <div>
      <div className="scheduleCardContainer">
        <FlipScheduleImage event={event} />
        <div className="scheduleContent">
          <div className="scheduleCardTitle">{event.name}</div>
          <div className="scheduleCardEventType">{event.category.split('_').join(' ')}</div>
          {/* <div className="scheduleCardDay">{dayjs(event.datetime).format('D/M/YYYY')}</div> */}
        </div>
        <div className="scheduleCardTime">{dayjs(event.datetime).format('h:mm a')}</div>
      </div>
    </div>
  );
};

export default ScheduleCard;
