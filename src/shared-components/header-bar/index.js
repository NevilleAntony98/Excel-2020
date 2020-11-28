import './index.scss'

export default function HeaderBar (props) {
    if (!props.title)
        return null

    return (
        <div className="competitions-header">
            <a className="title" href="/">{props.title}</a>
            {props.subtitle && <span className="subtitle">{props.subtitle}</span>}
        </div>
    )
}