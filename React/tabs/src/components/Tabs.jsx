import React from "react";

const Tabs = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

    const tabStyle = (index) => {
        return index === currentTabIndex ? "selectedTab" : "nonSelectedTab";
    };

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    };

    return (
        <div style={{ margin: "auto", wedth: "85%", textAlign: "left" }}>
            {
                allTabs.map((item, index) => (
                    <div className={`tab ${tabStyle(index)}`} onClick={(e) => setSelectedTab(index)}>
                        {item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;
