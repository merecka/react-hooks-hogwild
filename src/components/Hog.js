import React, { useState } from "react";

function Hog({index, name, specialty, greased, weight, image}) {
    const [isClicked, setIsClicked] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    function toggleClick() {
        setIsClicked(!isClicked);
    }

    function toggleHidden() {
        setIsHidden(!isHidden);
    }

        return (
            <div>
                <div className={isHidden? 'hidden' : undefined}>
                    <div className="ui eight wide column" onClick={toggleClick}>
                        <div className="hogName">{name}</div>
                        <img className="minPigTile" src={image} alt="piggy" />
                        {isClicked && 
                                <div onClick={toggleClick}>
                                <p className="specialty">Specialty:  {specialty}</p>
                                <p className="weight">Weight:  {weight}</p>
                                <p className="weight">Greased?:  {greased.toString()}</p>
                                </div>
                        }
                    </div>
                </div>
                <div>
                    <button onClick={toggleHidden}>{isHidden? 'Unhide' : 'Hide'}</button>
                </div>
            </div>
        );
}

export default Hog;
