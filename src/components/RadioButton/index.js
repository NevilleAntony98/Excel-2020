import './index.scss';

const RadioButton = ({selected, onChange, text, value, color}) => {
  return (
    <div
      className="modern-radio-container"
      onClick={() => {
        onChange(value);
      }}>
      <div
        className={`radio-outer-circle ${value !== selected && 'unselected'}`}
        style={{color: value !== selected && (color || '#666')}}>
        <div className={`radio-inner-circle ${value !== selected && 'unselected-circle'}`} />
      </div>
      <div className="helper-text" style={{color: color || '#666'}}>
        {text}
      </div>
    </div>
  );
};

export default RadioButton;
