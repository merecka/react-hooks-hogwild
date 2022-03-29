import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsList from "./HogsList";
import Filter from "./Filter";
import Sort from "./Sort";

function App() {
	const [hogsData, setHogs] = useState(hogs);
	const [filteredHogs, setFilteredHogs] = useState(hogsData);

	function handleFilteredHogs(greased) {
		if (greased === "true" || greased === "false") {
			const newHogList = hogsData.filter(hog => hog.greased.toString() === greased);
			setFilteredHogs(newHogList);
		} else {
			setFilteredHogs(hogsData);
		}
	}

	function handleSortHogs(sortOption) {
		const originalFilteredHogList = [...filteredHogs];
		const sortedHogList = [...filteredHogs];
		if (sortOption === "name") {
			sortedHogList.sort(function(a,b) {
				const hogA = a.name.toUpperCase(); // ignore upper and lowercase
				const hogB = b.name.toUpperCase(); // ignore upper and lowercase
				if (hogA < hogB) {
					return -1;
				}
				if (hogA > hogB) {
					return 1;
				}
					return 0;
				}
			)
			sortedHogList.forEach(hog => console.log(hog.name + " + " + hog.weight));
			setFilteredHogs(sortedHogList);
		} else if (sortOption === "weight") {
			sortedHogList.sort((a,b) => a.weight-b.weight);
			setFilteredHogs(sortedHogList);
		} else {
			setFilteredHogs(originalFilteredHogList);
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter handleFilter={handleFilteredHogs} />
			<Sort handleSort={handleSortHogs} />
			<HogsList hogs={filteredHogs} />
		</div>
	);
}

export default App;
