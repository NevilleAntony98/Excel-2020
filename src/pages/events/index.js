import HeaderBar from '../../shared-components/header-bar';
import EventsContainer from './events-container';
// import Background from '../../components/Background';

const Events = () => {
  return (
    <div>
      <HeaderBar title="Events" subtitle="Excel 2020" />
      <EventsContainer />
      {/* <Background /> */}
    </div>
  );
};

export default Events;
