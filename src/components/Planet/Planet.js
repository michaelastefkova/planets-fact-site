import styled from "styled-components";

export const PlanetWrapper = styled.section`
	margin-top: 14.28rem;
	padding: 0 1.71rem;
	text-align: center;
	@media only screen and (min-width: 768px) {
		padding: 0 2.85rem;
		margin-top: 0;
	}
	@media only screen and (min-width: 1110px) {
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		max-width: 79.28rem;
		margin: 0 auto;
		text-align: left;
	}
`;

export const PlanetContainer = styled.div`
	@media only screen and (min-width: 1110px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 666px;
	}
`;

export const PlanetTitle = styled.h1`
	&::before,
	&::after {
		content: "";
		display: block;
		height: 0;
		width: 0;
	}
`;

export const PlanetImageWrapper = styled.div`
	position: relative;
	margin-bottom: 5rem;
	@media only screen and (min-width: 768px) {
		margin: 4rem auto 6rem;
	}
	@media only screen and (min-width: 1110px) {
		flex: 1;
		display: flex;
		max-width: 60%;
		margin: 0 auto;
	}
`;

export const PlanetImage = styled.img`
	display: block;
	margin: auto;
	max-width: 50%;
	@media only screen and (min-width: 1110px) {
		max-width: 30%;
	}
	@media only screen and (min-width: 1110px) {
		max-width: 100%;
	}
	&.geology {
		position: absolute;
		max-width: 5rem;
		left: 50%;
		top: 70%;
		transform: translateX(-50%);
		@media only screen and (min-width: 768px) {
			max-width: 11.64rem;
			top: 60%;
		}
	}
`;

export const PlanetInfo = styled.aside`
	@media only screen and (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media only screen and (min-width: 1110px) {
		flex-direction: column;
		width: 33%;
		max-height: 38.57rem;
	}
`;

export const PlanetInfoWrapper = styled.div`
	@media only screen and (min-width: 768px) and (max-width: 1110px) {
		margin-right: 70px;
		text-align: left;
	}
`;

export const PlanetText = styled.p`
	margin: 23px 0 0;
	color: var(--color-white);
`;

export const PlanetWiki = styled.p`
	margin-top: 1.42rem;
	color: hsla(0, 0%, 100%, 50%);
	font-size: 0.857rem;
	img {
		display: inline-block;
		vertical-align: middle;
	}
	@media only screen and (min-width: 768px) {
		margin-top: 2.28rem;
	}
	@media only screen and (min-width: 1110px) {
		font-size: 1rem;
	}
`;

export const PlanetWikiLink = styled.a`
	color: hsla(0, 0%, 100%, 50%);
	font-weight: 700;
	&:hover {
		text-decoration: none;
	}
`;

export const PlanetButtonContainer = styled.div`
	counter-reset: step;
	position: fixed;
	z-index: 50;
	left: 0;
	right: 0;
	top: 68px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid hsla(0, 0%, 100%, 20%);
	background-color: var(--color-black);
	@media only screen and (min-width: 768px) {
		position: static;
		display: block;
		min-width: 268px;
	}
	@media only screen and (min-width: 1110px) {
		margin-top: 2.85rem;
		min-width: 100%;
	}
`;

export const PlanetButton = styled.button`
	font-family: var(--ff-spartan);
	position: relative;
	cursor: pointer;
	display: block;
	flex: 1;
	flex-basis: 0;
	width: 100%;
	padding: 1.42rem 0;
	margin: 0 1.71rem;
	color: hsla(0, 0%, 100%, 50%);
	font-size: 0.64rem;
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	border: 0;
	background-color: var(--color-black);
	&.active {
		color: var(--color-white);
		&::after {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 4px;
		}
		.mercury & {
			&::after {
				background-color: var(--color-mercury);
			}
		}
		.venus & {
			&::after {
				background-color: var(--color-venus);
			}
		}
		.earth & {
			&::after {
				background-color: var(--color-earth);
			}
		}
		.mars & {
			&::after {
				background-color: var(--color-mars);
			}
		}
		.jupiter & {
			&::after {
				background-color: var(--color-jupiter);
			}
		}
		.saturn & {
			&::after {
				background-color: var(--color-saturn);
			}
		}
		.uranus & {
			&::after {
				background-color: var(--color-uranus);
			}
		}
		.neptune & {
			&::after {
				background-color: var(--color-neptune);
			}
		}
	}
	@media only screen and (min-width: 768px) {
		padding: 0 1.42rem;
		margin: 0;
		width: 100%;
		text-align: left;
		line-height: 38px;
		color: var(--color-white);
		border: 1px solid hsla(0, 0%, 100%, 20%);
		&:not(:first-child) {
			margin-top: 16px;
		}
		&:hover {
			border-color: var(--button-hover);
			background-color: var(--button-hover);
		}
		&::after {
			display: none;
		}
		&.active {
			.mercury & {
				background-color: var(--color-mercury);
				border-color: var(--color-mercury);
			}
			.venus & {
				background-color: var(--color-venus);
				border-color: var(--color-venus);
			}
			.earth & {
				background-color: var(--color-earth);
				border-color: var(--color-earth);
			}
			.mars & {
				background-color: var(--color-mars);
				border-color: var(--color-mars);
			}
			.jupiter & {
				background-color: var(--color-jupiter);
				border-color: var(--color-jupiter);
			}
			.saturn & {
				background-color: var(--color-saturn);
				border-color: var(--color-saturn);
			}
			.uranus & {
				background-color: var(--color-uranus);
				border-color: var(--color-uranus);
			}
			.neptune & {
				background-color: var(--color-neptune);
				border-color: var(--color-neptune);
			}
		}
	}
	@media only screen and (min-width: 1110px) {
		padding: 0 2rem;
		font-size: 0.85em;
		line-height: 46px;
		&::before {
			content: counter(step, decimal-leading-zero);
			counter-increment: step;
			display: inline-block;
			vertical-align: middle;
			margin-right: 1.78rem;
			color: hsla(0, 0%, 100%, 50%);
			font-size: 0.857rem;
			font-weight: 700;
		}
	}
`;

export const PlanetFooter = styled.footer`
	margin-top: 2rem;
	margin-bottom: 2rem;
	@media only screen and (min-width: 768px) {
		margin-top: 6.42rem;
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: space-between;
	}
	@media only screen and (min-width: 1110px) {
		margin: 0;
	}
`;

export const PlanetFooterItem = styled.div`
	padding: 0.785rem 1.71rem;
	border: 1px solid hsla(0, 0%, 100%, 20%);
	display: flex;
	align-items: center;
	justify-content: space-between;
	&:not(:first-child) {
		margin-top: 8px;
	}
	@media only screen and (min-width: 768px) {
		padding: 1.14rem;
		display: block;
		flex: 1;
		flex-basis: 0;
		text-align: left;
	}
	@media only screen and (min-width: 1110px) {
		display: block;
		padding: 1.42rem;
		max-width: 255px;
		&:not(:first-child) {
			margin-top: 0;
		}
	}
`;

export const PlanetFooterTitle = styled.span`
	text-transform: uppercase;
	color: hsla(0, 0%, 100%, 50%);
	font-size: 0.571rem;
	font-weight: 700;
	letter-spacing: 1px;
	@media only screen and (min-width: 1110px) {
		font-size: 0.785rem;
	}
`;
export const PlanetFooterText = styled.h2`
	text-transform: uppercase;
	color: var(--color-white);
	letter-spacing: 0;
`;
