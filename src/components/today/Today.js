import { useState } from "react";
import SearchPanel from "../searchPanel/SearchPanel";
import TodayCard from "../todayCard/TodayCard";


const Today = (props) => {
    const [todayForecast, setTodayForecast] = useState(null);
    const [todayLoading, setTodayLoading] = useState(false);
    
    const handleSetTodayLoading = (loading) => {
        setTodayLoading(loading);
    };
    
    const handleSetTodayForecast = (todayForecastData) => {
        setTodayForecast(todayForecastData);
        
    };
    const handleSetWeekForecast = (weekForecast) => {
        props.onSetWeekForecast(weekForecast);
    };
    return (
        <div className="today">
            <SearchPanel onSetWeekLoading={props.onSetWeekLoading} onSetTodayLoading={handleSetTodayLoading} onSetTodayForecast={handleSetTodayForecast} onSetWeekForecast={handleSetWeekForecast}/>
            <TodayCard todayLoading={todayLoading} todayForecast={todayForecast}/>
        </div>
    );
}

export default Today;