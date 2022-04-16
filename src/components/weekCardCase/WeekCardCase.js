
const WeekCardCase = (props) => {

    const {info} = props;
    return (
        <div className="week-card__main-case">
            <div className="week-card__main-case-title">{info.title}</div>
            <div className="week-card__main-case-value">{info.value}</div>
        </div>
    );
}

export default WeekCardCase;