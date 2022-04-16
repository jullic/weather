
const TodayCardSection = (props) => {
    const {info} = props;
    return (
        <div className="today-card__main-section">
            <div className="today-card__main-section-title">{info.title}</div>
            <div className="today-card__main-section-info">
                <div className="today-card__main-section-info-case">
                    <div className="today-card__main-section-info-case-title">{info.firstCase}</div>
                    <div className="today-card__main-section-info-case-value">{info.firstValue}</div>
                </div>
                <div className="today-card__main-section-info-case">
                    <div className="today-card__main-section-info-case-title">{info.secondCase}</div>
                    <div className="today-card__main-section-info-case-value">{info.secondValue}</div>
                </div>
            </div>
        </div>
    )
}

export default TodayCardSection;