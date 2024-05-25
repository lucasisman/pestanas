import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index, callback) => {
        setActiveTabIndex(index);
        if (callback) {
        callback();
        }
    };

    return (
        <div>
        <div className="tab-headers">
            {tabs.map((tab, index) => (
            <button
                key={index}
                className={`tab-header ${index === activeTabIndex ? 'active' : ''}`}
                onClick={() => handleTabClick(index, tab.callback)}
            >
                {tab.label}
            </button>
            ))}
        </div>
        <div className="tab-content">
            <div className="content" key={activeTabIndex}>
            {tabs[activeTabIndex].content}
            </div>
        </div>
        </div>
    );
};

export default Tabs;