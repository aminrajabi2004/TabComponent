import React, { useState } from "react";
import "./App.css";

const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handelActiveTab = (id) => {
    setActiveTab(id);
  };

  const [showApp, setShowApp] = useState(true);
  const handelShowTab = () => {
    setShowApp(!showApp);
  };

  return (
    <>
      <button onClick={handelShowTab}>❌</button>
      {showApp ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                onClick={() => handelActiveTab(tab.id)}
                key={tab.id}
                className={activeTab == tab.id ? "active" : null}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab__content">{tabData[activeTab - 1].content}</div>
        </div>
      ) : (
        <p>nothing</p>
      )}
    </>
  );
}

export default App;
