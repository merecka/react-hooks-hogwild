import React from "react";
import Hog from "./Hog";

function HogsList({hogs}) {

	return (
		<div className="hogslist ui grid container">
            {hogs.map((hog, index) => {
              return <Hog key={hog.name} index={index} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} image={hog.image} />
            })}
		</div>
	);
}

export default HogsList;
