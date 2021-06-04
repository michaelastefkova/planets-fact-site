import * as React from "react";
import hamburger from "../../images/icon-hamburger.svg";
import chevron from "../../images/icon-chevron.svg";

import {
	HeaderWrapper,
	Title,
	NavContainer,
	NavLink,
	Hamburger,
} from "./Header";

export const Header = ({ heading, planets, handleChangePlanet }) => {
	const [activePlanet, setActivePlanet] = React.useState("mercury");
	const [navOpened, setNavOpened] = React.useState(false);

	React.useEffect(() => {
		document.body.classList.toggle("nav-opened");
	}, [navOpened]);

	function handleNewPlanet(index, planetName) {
		handleChangePlanet(index, planetName);
		setActivePlanet(planetName.toLowerCase());
	}

	function handleNavOpen() {
		navOpened ? setNavOpened(false) : setNavOpened(true);
	}

	return (
		<HeaderWrapper>
			<Title>{heading}</Title>
			<NavContainer>
				{planets.map((planet, index) => {
					let name = planet.name.toLowerCase();
					return (
						<NavLink
							key={index}
							className={`${name} ${
								activePlanet === name.toLowerCase()
									? "active"
									: "inactive"
							}`}
							onClick={() => handleNewPlanet(index, name)}
						>
							{name}
							<img src={chevron} alt="icon chevron" />
						</NavLink>
					);
				})}
			</NavContainer>
			<Hamburger onClick={() => handleNavOpen()}>
				<img src={hamburger} alt="menu hamburger" />
			</Hamburger>
		</HeaderWrapper>
	);
};
