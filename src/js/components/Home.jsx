import React from "react";


//create your first component
const Home = ({ seconds }) => {
	const padded = String(seconds).padStart(6, "0").split("");
	return (
		<div className="timer-container">
      <div className="digit">🕒</div>
      {padded.map((digit, index) => (
        <div className="digit" key={index}>
          {digit}
        </div>
      ))}
    </div>
	);
};

export default Home;