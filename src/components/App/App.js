import * as React from "react";
import "./App.css";
import data from "../../data/data.json";
import { Header } from "../Header";
import { Planet } from "../Planet";

const App = () => {
	const [currentPlanet, setCurrentPlanet] = React.useState(data[0]);
	const [bodyClass, setBodyClass] = React.useState(
		data[0].name.toLowerCase()
	);
	const [resetTab, setResetTab] = React.useState(0);

	React.useEffect(() => {
		function handleBodyClass() {
			document.body.removeAttribute("class");
			document.body.classList.toggle(bodyClass);
		}
		handleBodyClass();
	}, [bodyClass]);

	React.useEffect(() => {
		setResetTab(0);
	}, [currentPlanet, resetTab]);

	function handleChangePlanet(idx, name) {
		setCurrentPlanet(data[idx]);
		setBodyClass(name.toLowerCase());
	}

	return (
		<>
			<Header
				heading="The Planets"
				planets={data}
				handleChangePlanet={handleChangePlanet}
			/>
			<Planet currentPlanet={currentPlanet} resetTab={resetTab} />
		</>
	);
};

export default App;
