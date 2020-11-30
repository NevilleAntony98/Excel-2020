import {Link} from 'react-router-dom';
import './index.scss';

export default function HeaderBar(props) {
  if (!props.title) return null;

  return (
    <div className="competitions-header">
      <Link className="title" to="/">
        {props.title}
      </Link>
      {props.subtitle && <span className="subtitle">{props.subtitle}</span>}
    </div>
  );
}
