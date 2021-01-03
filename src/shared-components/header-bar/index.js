// import {Link} from 'react-router-dom';
import './index.scss';

const HeaderBar = ({title, subtitle}) => {
  return (
    title && (
      <div className="competitions-header">
        <div className="title">{title}</div>
        {/* {props.subtitle && <span className="subtitle">{props.subtitle}</span>} */}
      </div>
    )
  );
};

export default HeaderBar;
