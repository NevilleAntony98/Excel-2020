import dayjs from 'dayjs';

import './ScheduleCard.scss';

const ScheduleCard = ({event}) => {
  return (
    <div className="scheduleCardContainer">
      <img className="scheduleCardIcon" src={event.icon} alt={event.name} />
      <div className="scheduleCardTitle">{event.name}</div>
      <div>{dayjs(event.datetime).format('h:mm a')}</div>
    </div>
  );
};

export default ScheduleCard;
