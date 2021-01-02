import {useEffect, useState} from 'react';
// import {animated} from 'react-spring';

import excelIcon from '../../assets/png/excel2020.png';

import './index.scss';

const PlaceholderIcon = ({alt}) => {
  return <img className="flipIcon" src={excelIcon} alt={alt} />;
};

const FlipIcon = ({url, alt}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [url]);

  // const props = useSpring({
  //   from: {transform: 'rotateY(360deg)'},
  //   to: {transform: 'rotateY(0deg)'},
  //   config: {tension: 200, friction: 40}
  // });

  return isLoading ? (
    <PlaceholderIcon alt={alt} />
  ) : (
    <div className="flipIconbg">
      <img className="flipIcon" src={url} alt={alt} />
    </div>
  );
};

export default FlipIcon;
