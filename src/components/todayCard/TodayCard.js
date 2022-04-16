import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import TodayCardSection from "../todayCardSection/TodayCardSection";
import TodayCardError from "./TodayCardError";
import TodayCardSkeleton from "./TodayCardSkeleton";


const TodayCard = (props) => {
    const {todayForecast} = props;
    
    if (todayForecast === null) {
        return <TodayCardSkeleton/>
    }
    if (todayForecast.error) {
        return <TodayCardError/>
    }
    const month = ['Января', 'Феварля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    
    let date = props.todayForecast.current.last_updated;
    date = date.split(' ');
    date[0] = date[0].split('-');
    let time = new Date();

    const sections = [
        {title: 'Температура', firstCase: 'Сейчас', secondCase: 'Ощущается', firstValue: todayForecast.current.temp_c + '°', secondValue: todayForecast.current.feelslike_c + '°'},
        {title: 'Ветер', firstCase: 'Скорость', secondCase: 'Направление', firstValue: (todayForecast.current.wind_kph / 3.6).toFixed(1) + ' м/с', secondValue: todayForecast.current.wind_dir},
        {title: 'Воздух', firstCase: 'Давление', secondCase: 'Влажность', firstValue: (todayForecast.current.pressure_mb * 0.75).toFixed(0) + ' мм', secondValue: todayForecast.current.humidity + '%'},
    ];
    
    
    return (
    <div className="today-card">
        {props.todayLoading ? <Spinner/> : <View time={time} todayForecast={todayForecast} date={date} month={month} sections={sections}/>}
    </div>
    );
}

const View = (props) => {

    const {todayForecast, date, month, sections, time} = props;
    return (
        <>
            <div className="today-card__header">
                <img src={todayForecast.current.condition.icon} alt="" className="today-card__img" />
                <div className="today-card__date">
                    <div className="today-card__date-number">{date[0][2] + ' ' +  month[date[0][1] - 1]}</div>
                    <div className="today-card__date-time">{time.getHours() + ':' + time.getMinutes()}</div>
                </div>
            </div>
            <div className="today-card__main">
                {sections.map((item, i) => <TodayCardSection key={i} info={item}/>)}
            </div>
        </>
    )
}

export default TodayCard;