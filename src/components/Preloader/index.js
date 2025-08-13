import React from "react";

const Preloader = () => {
  return (
    <div id="react__preloader">
		<div id="react__circle_loader"></div>
		<div className="react__loader_logo">
			<img src="/fav.png" alt="Loading" />
		</div>
	</div> 
  );
};

export default Preloader;
