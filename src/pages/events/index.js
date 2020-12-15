import HeaderBar from '../../shared-components/header-bar';
import EventsContainer from './events-container';

const Events = () => {
  return (
    <div>
      <HeaderBar title="Events" subtitle="Excel 2020" />
      <EventsContainer />
    </div>
  );
};

export default Events;
