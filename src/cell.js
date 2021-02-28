import React, {useState} from 'react';

function Cell ({num, isFree}) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return <div className={`bingo-cell${isFree || clicked ? " clicked" : ""}`} onClick={handleClick}>
            {isFree ? "Free" : num}
        </div>
}

export default Cell;