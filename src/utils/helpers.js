const Helpers = {};

Helpers.detectDeviceType = () => {
	const userAgent = navigator.userAgent;
	const mobileUserAgent =
		"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";

	if (userAgent === mobileUserAgent) {
		return "Mobile";
	}

	if (userAgent !== mobileUserAgent) {
		return "Desktop";
	}
};

Helpers.matchMedia = () => {
	const mediaQueryMAX = window.matchMedia("(max-width: 767px)");
	const mediaQueryMIN = window.matchMedia("(min-width: 768px)");

	if (mediaQueryMAX.matches) {
		console.log("Mobile");
		return "Mobile";
	}

	if (mediaQueryMIN.matches) {
		console.log("Desktop");
		return "Desktop";
	}
};

export default Helpers;
