import React from "react";
import source from "../../images/icon-source.svg";

import {
	PlanetWrapper,
	PlanetContainer,
	PlanetImageWrapper,
	PlanetImage,
	PlanetInfoWrapper,
	PlanetInfo,
	PlanetTitle,
	PlanetText,
	PlanetWiki,
	PlanetWikiLink,
	PlanetButtonContainer,
	PlanetButton,
	PlanetFooter,
	PlanetFooterItem,
	PlanetFooterTitle,
	PlanetFooterText,
} from "./Planet";

import Helpers from "../../utils/helpers";

import { tabs } from "../../data/tabs";

export const Planet = ({ currentPlanet, resetTab }) => {
	const [isMobile, setIsMobile] = React.useState();

	React.useEffect(() => {
		setIsMobile(Helpers.detectDeviceType());
	}, [isMobile]);

	const [isActiveTab, setIsActiveTab] = React.useState(resetTab);
	const [currentTab, setCurrentTab] = React.useState(tabs[0].data);

	React.useEffect(() => {
		function handleResetTab() {
			if (isActiveTab !== resetTab) {
				setIsActiveTab(0);
				setCurrentTab(tabs[0].data);
			}
		}
		handleResetTab();
	}, [currentPlanet]); // eslint-disable-line react-hooks/exhaustive-deps

	function onClickTabItem(index, tab) {
		setIsActiveTab(index);
		setCurrentTab(tab);
	}

	return (
		<PlanetWrapper>
			<PlanetContainer>
				<PlanetImageWrapper>
					{currentTab === "geology" ? (
						<>
							<PlanetImage
								src={
									process.env.PUBLIC_URL +
									currentPlanet.images.overview
								}
								alt={currentPlanet.name}
							/>
							<PlanetImage
								className="geology"
								src={
									process.env.PUBLIC_URL +
									currentPlanet.images[currentTab]
								}
								alt="geology"
							/>
						</>
					) : (
						<PlanetImage
							src={
								process.env.PUBLIC_URL +
								currentPlanet.images[currentTab]
							}
							alt={currentPlanet.name}
						/>
					)}
				</PlanetImageWrapper>
				<PlanetInfo>
					<PlanetInfoWrapper>
						<PlanetTitle>{currentPlanet.name}</PlanetTitle>
						<PlanetText>
							{currentPlanet[currentTab].content}
						</PlanetText>
						<PlanetWiki>
							Source : {""}
							<PlanetWikiLink
								href={currentPlanet[currentTab].source}
								target="_blank"
							>
								Wikipedia
							</PlanetWikiLink>{" "}
							<img src={source} alt="wikipedia" />
						</PlanetWiki>
					</PlanetInfoWrapper>
					<PlanetButtonContainer>
						{tabs.map((tab, index) => {
							let data = tab.data;
							return (
								<PlanetButton
									key={index}
									id={tab.id}
									onClick={() => onClickTabItem(index, data)}
									className={`${data} ${
										isActiveTab === index
											? "active"
											: "inactive"
									}`}
								>
									{isMobile !== "Mobile"
										? tab.text
										: tab.mobile}
								</PlanetButton>
							);
						})}
					</PlanetButtonContainer>
				</PlanetInfo>
			</PlanetContainer>
			<PlanetFooter className="planet-footer">
				<PlanetFooterItem>
					<PlanetFooterTitle>Rotation Time</PlanetFooterTitle>
					<PlanetFooterText>
						{currentPlanet.rotation}
					</PlanetFooterText>
				</PlanetFooterItem>
				<PlanetFooterItem>
					<PlanetFooterTitle>Revolution Time</PlanetFooterTitle>
					<PlanetFooterText>
						{currentPlanet.revolution}
					</PlanetFooterText>
				</PlanetFooterItem>
				<PlanetFooterItem>
					<PlanetFooterTitle>Radius</PlanetFooterTitle>
					<PlanetFooterText>{currentPlanet.radius}</PlanetFooterText>
				</PlanetFooterItem>
				<PlanetFooterItem>
					<PlanetFooterTitle>Average Temp.</PlanetFooterTitle>
					<PlanetFooterText>
						{currentPlanet.temperature}
					</PlanetFooterText>
				</PlanetFooterItem>
			</PlanetFooter>
		</PlanetWrapper>
	);
};
