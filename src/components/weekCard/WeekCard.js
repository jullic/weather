import WeekCardCase from "../weekCardCase/WeekCardCase";

const WeekCard = (props) => {

    const month = ['Января', 'Феварля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let date = props.forecast.datetime;
    date = date.split('-');
    
    
    const {forecast} = props;
    const cases = [
        {title: 'Температура', value: forecast.min_temp + '° ... ' + forecast.max_temp + '°'},
        {title: 'Давление', value: (forecast.pres * 0.75).toFixed(0) + ' мм'},
        {title: 'Ветер', value: forecast.wind_spd + ' м/с'},
        {title: 'Влажность', value: forecast.rh + '%'},
    ]

    return (
        <div className="week-card">
            <div className="week-card__header">
                <div className="week-card__date">{date[2] + ' ' + month[date[1] - 1]}</div>
                <img src="" alt="" className="week-card__img" />
            </div>
            <div className="week-card__main">
                {cases.map((item, i) => <WeekCardCase key={i} info={item}/>)}
            </div>
        </div>
    )
}

export default WeekCard;