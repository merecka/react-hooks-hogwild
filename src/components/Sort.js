import React, { useState } from "react";

function Sort({handleSort}) {
    const [sortOption, setSortOption] = useState("none");

    function handleSortOption(event) {
        setSortOption(event.target.value);
        handleSort(event.target.value);
    }

	return (
		<div className="filterWrapper ui eight wide column">
            <select name="sort" onChange={handleSortOption} >
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
		</div>
	);
}

export default Sort;
