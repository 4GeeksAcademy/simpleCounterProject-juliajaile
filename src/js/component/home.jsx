import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container bg-black text-white ">
			<SecondsCounter/>
		</div>
	);
};

export default Home;
