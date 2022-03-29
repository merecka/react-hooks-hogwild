import React, { useState } from "react";

function Filter({handleFilter}) {
    const [greased, setGreased] = useState("all");

    function setGreasedFilter(event) {
        setGreased(event.target.value);
        handleFilter(event.target.value);
    }

	return (
		<div className="filterWrapper ui eight wide column">
            <select name="greased" onChange={setGreasedFilter} >
                <option value="all">All</option>
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
            </select>
		</div>
	);
}

export default Filter;
