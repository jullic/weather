import { useState } from "react";
import Today from "./components/today/Today";
import Week from "./components/week/Week";


function App() {
	const [weekForecast, setWeekForecast] = useState(null);
	const [weekLoading, setWeekLoading] = useState(false);
	
	const handleSetWeekForecast = (weekForecast) => {
		setWeekForecast(weekForecast);
	};
	const handleSetWeekLoading = (loading) => {
		setWeekLoading(loading);
	}
	if (weekForecast === undefined) {
		setWeekForecast({error: true});
	}
	
	return (
	<div className="App">
		<div className="container">
			<div className="content">
				<Today onSetWeekLoading={handleSetWeekLoading} onSetWeekForecast={handleSetWeekForecast}/>
				<Week weekLoading={weekLoading} weekForecast={weekForecast}/>
			</div>
		</div>
	</div>
	);
}

export default App;
