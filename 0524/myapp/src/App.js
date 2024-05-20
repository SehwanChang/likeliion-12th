import React, { useState } from "react";
import RandomUser from "./RandomUser";

const App = () => {
  const [showUser, setShowUser] = useState(true);

  return (
    <div>
      <button onClick={() => setShowUser(!showUser)}>
        {showUser ? "Hide" : "Show"} User
      </button>
      {showUser && <RandomUser />}
    </div>
  );
};

export default App;
