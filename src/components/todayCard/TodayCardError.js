import error from './error.svg';

const TodayCardError = () => {
    return (
        <div className="today-card">
            <div className="error">
                <div className="error-text">
                    К сожалению, у нас нет данных по этому городу
                        <br /><br />
                    Пожалуйста, проверьте правильность написания
                </div>
                <img src={error} alt="" className="img-error" />
            </div>
        </div>
    );
}

export default TodayCardError;