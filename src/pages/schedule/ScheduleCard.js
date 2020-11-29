import dayjs from 'dayjs';

import './ScheduleCard.scss';

const ScheduleCard = ({key, event}) => {
  return (
    <div key={key} className="scheduleCardContainer">
      <img className="scheduleCardIcon" src={event.icon} alt={event.name} />
      <div className="scheduleCardTitle">{event.name}</div>
      <div>{dayjs(event.datetime).format('D/M/YYYY h:mm a')}</div>
    </div>
  );
};

export default ScheduleCard;
