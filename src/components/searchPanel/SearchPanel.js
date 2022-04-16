
import { useState } from 'react';
import weather from '../../services/weather';
import enter from './enter.svg';
const SearchPanel = (props) => {
    const {getTodayForecast, getWeekForecast} = weather();
    const [city, setCity] = useState('');

    const searchForecast = () => {
        if (city === '') {
            return;
        }
        props.onSetTodayLoading(true)
        getTodayForecast(city)
        .then(res => {
            props.onSetTodayForecast(res);
        })
        .catch(err => props.onSetTodayForecast({error: true}))
        .finally(() => props.onSetTodayLoading(false));

        props.onSetWeekLoading(true);
        getWeekForecast(city)
        .then(res => {
            props.onSetWeekForecast(res)
        })
        .catch(err => props.onSetWeekForecast({error: true}))
        .finally(() => props.onSetWeekLoading(false));
    };
    const enterCity = (e) => {
        setCity(e.target.value);
    };
    const keyDown = (e) => {
        if (e.keyCode === 13) {
            searchForecast();
        }
    }
    return (
        <div className="search">
            <input onKeyDown={keyDown} onChange={enterCity} type="text" className="search__input" placeholder="Введите название города" />
            <button onClick={searchForecast} className="search__btn">
                <img src={enter} alt="ok" className="search__img" />
            </button>
        </div>
    );
}

export default SearchPanel;