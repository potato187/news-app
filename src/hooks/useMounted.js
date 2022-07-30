import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const useMounted = (callback = null, deps, cleanup = null) => {
	const mounted = useRef(true);

	useEffect(() => {
		if (!mounted.current && callback) {
			callback();
		}
		mounted.ref = false;

		if (cleanup) {
			return () => {
				cleanup();
			};
		}
	}, deps);
};

export default useMounted;
