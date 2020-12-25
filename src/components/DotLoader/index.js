import { Fragment } from 'react'

import './index.scss'

const DotLoader = ({color}) => {
    const loadingDot = <svg className="loading-dot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455"><circle cx="227.5" cy="227.5" r="227.5" fill={color}/></svg>

    return(
        <Fragment>
                <span className="one">{loadingDot}</span>
                <span className="two">{loadingDot}</span>
                <span className="three">{loadingDot}</span>
        </Fragment>
    )
}

export default DotLoader