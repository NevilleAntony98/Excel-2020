import HeaderBar from '../../shared-components/header-bar';
import EventsContainer from './events-container';

const Events = () => {
  return (
    <div>
      <HeaderBar title="Excel 2020" subtitle="Events" />
      <EventsContainer />
    </div>
  );
};

export default Events;
