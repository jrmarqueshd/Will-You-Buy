import React from "react";

import Calculator from "./src/pages/Calculator/index";

export default function App() {
	return (
		<>
			<Calculator />
			{(console.disableYellowBox = true)}
		</>
	);
}
