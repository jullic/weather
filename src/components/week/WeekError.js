import error from './error.svg';

const WeekError = () => {
    
    return (
        <div className="week">
            <div className="error">
                <img src={error} alt="" className="img-error" />
            </div>
        </div>
    );
}

export default WeekError;