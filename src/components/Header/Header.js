import styled from "styled-components";

export const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 80;
	// margin-bottom: 7.14rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.14rem 1.71rem;
	height: 68px;
	border-bottom: 1px solid hsla(0, 0%, 100%, 20%);
	background-color: var(--color-black);
	@media only screen and (min-width: 768px) {
		display: block;
		position: static;
		padding: 0 2.85rem;
		height: auto;
		text-align: center;
	}
	@media only screen and (min-width: 1110px) {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: left;
	}
`;

export const Title = styled.span`
	color: var(--color-white);
	text-transform: uppercase;
	font-size: 2rem;
	font-weight: 500;
	font-family: var(--ff-antonio);
	@media only screen and (min-width: 768px) {
		display: block;
		margin: 2.14rem auto;
	}
	@media only screen and (min-width: 1110px) {
		margin: 0;
	}
`;

export const NavContainer = styled.nav`
	position: fixed;
	opacity: 0;
	top: 68px;
	padding-bottom: 68px;
	left: 0;
	right: 0;
	z-index: 1000;
	height: 100%;
	overflow: auto;
	background-color: var(--color-black);
	transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
	transform: translateX(100%);
	.nav-opened & {
		// transform: translateY(0);
		opacity: 1;
		transform: translateX(0);
	}
	@media only screen and (min-width: 768px) {
		opacity: 1;
		position: static;
		padding-bottom: 0;
		height: auto;
		transform: translateX(0);
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	@media only screen and (min-width: 1110px) {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
`;

export const NavLink = styled.span`
	cursor: pointer;
	padding: 1.42rem 0 1.42rem 3.57rem;
	margin-left: 1.71rem;
	margin-right: 1.71rem;
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	font-size: 1.071em;
	font-weight: 700;
	text-transform: uppercase;
	color: var(--color-white);
	&:not(:first-child) {
		border-top: 1px solid hsla(0, 0%, 100%, 10%);
	}
	&::before {
		content: "";
		position: absolute;
		left: 1.71rem;
		height: 20px;
		width: 20px;
		border-radius: 20px;
		background: white;
	}
	&.mercury {
		&::before {
			background-color: var(--color-mercury);
		}
	}
	&.venus {
		&::before {
			background-color: var(--color-venus);
		}
	}
	&.earth {
		&::before {
			background-color: var(--color-earth);
		}
	}
	&.mars {
		&::before {
			background-color: var(--color-mars);
		}
	}
	&.jupiter {
		&::before {
			background-color: var(--color-jupiter);
		}
	}
	&.saturn {
		&::before {
			background-color: var(--color-saturn);
		}
	}
	&.uranus {
		&::before {
			background-color: var(--color-uranus);
		}
	}
	&.neptune {
		&::before {
			background-color: var(--color-neptune);
		}
	}
	@media only screen and (min-width: 768px) {
		img {
			display: none;
		}
		&:not(:first-child) {
			border-top: 0;
		}
		position: relative;
		display: block;
		margin: 0;
		padding: 2.35rem 0;
		color: hsla(0, 0%, 100%, 75%);
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
		&:not(:first-child) {
			margin-left: 33px;
		}
		&::before {
			bottom: 0;
			left: 50%;
			height: 4px;
			width: 0;
			transform: translateX(-50%);
			transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
			background: white;
			border-radius: 0;
		}
		&:hover,
		&.active {
			color: hsla(0, 0%, 100%, 100%);
			&::before {
				width: 100%;
			}
		}
	}
	@media only screen and (min-width: 1110px) {
		padding: 2.14rem 0;
		&::before {
			top: 0;
		}
	}
`;

export const Hamburger = styled.div`
	cursor: pointer;
	padding: 0;
	opacity: 1;
	transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
	img {
		display: block;
		max-width: 100%;
	}
	.nav-opened & {
		opacity: 0.2;
	}
	@media only screen and (min-width: 768px) {
		display: none;
	}
`;
