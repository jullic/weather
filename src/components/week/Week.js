import Spinner from "../spinner/Spinner";
import WeekCard from "../weekCard/WeekCard"
import WeekError from "./WeekError";
import WeekSkeleton from "./WeekSkeleton";

const Week = (props) => {
    const {weekForecast} = props;
    if (weekForecast === null) {
        return <WeekSkeleton/>
    }

    if (weekForecast.error) {
        return <WeekError/>
    }
    
    return (
        <div className="week">
            {props.weekLoading ? <Spinner/> : <View weekForecast={weekForecast}/>}
        </div>
    );
}

const View = (props) => {
    const {weekForecast} = props;
    return (
        <div className="week__grid">
            {weekForecast.data.map((forecast, i) => i !== 0 && <WeekCard key={i} forecast={forecast}/>)}
        </div>
    );
}


export default Week;