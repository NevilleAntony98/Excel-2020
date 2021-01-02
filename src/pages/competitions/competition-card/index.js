import {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
// import { Spring } from 'react-spring/renderprops';

import './index.scss';

import CompetitionPopup from '../competition-popup';

import excelIcon from '../../../assets/png/excel2020.png';

const FlipImage = ({competition}) => {
  const [isLoading, setIsLoading] = useState(true)
  const img = new Image()

  useEffect(() => {
    img.src = competition.icon
    img.onload = () => setIsLoading(false)
  })

  if (isLoading)
    return <img src={excelIcon} alt={competition.name} />

  return (
      // <Spring
      // from={{transform: 'rotateY(360deg)'}}
      // to={{transform: 'rotateY(0deg)'}}
      // config={{tension: 200, friction: 40}}>
      // {props => (
        // <div style={props}>
        <div>
          <img src={competition.icon} alt={competition.name} />
        </div>
      // )}
      // </Spring>
  )
}

const CompetitionCard = ({competition}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="competition-card-container">
        <div className="competition-card" onClick={() => setOpen(true)}>
          <div className="icon">
            <FlipImage competition={competition} />
          </div>
          <div className="title">
            <span>{competition.name}</span>
          </div>
          <div className="category">
            <span>{competition.category.replace(/_/g, " ")}</span>
          </div>
        </div>
      <Popup open={open} onClose={() => setOpen(false)} closeOnDocumentClick closeOnEscape nested>
        <CompetitionPopup
        open={open}
        competition={competition}
        closeFunc={() => setOpen(false)} />
      </Popup>
    </div>
  );
}

export default CompetitionCard