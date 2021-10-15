import React from "react";

const Results = (props) => {
    const { allTabs, currentTabIndex } = props;

    return (
        <div className="results">
            { allTabs[currentTabIndex].content }
        </div>
    )
}

export default Results;
