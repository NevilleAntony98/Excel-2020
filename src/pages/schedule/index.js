import HeaderBar from '../../shared-components/header-bar';
import ScheduleMain from './ScheduleMain';
import Background from '../../components/Background';

const Schedule = () => {
  return (
    <div>
      <HeaderBar title="Schedule" subtitle="Excel 2020" />
      <ScheduleMain />
      <Background />
    </div>
  );
};

export default Schedule;
