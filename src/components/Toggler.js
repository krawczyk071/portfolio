import React, { useState } from "react";

const Toggler = () => {
  const [state, setState] = useState(false);
  return (
    <div className="togg" onClick={() => setState((prev) => !prev)}>
      <div className={`togg1 ${state ? "active" : ""}`}>
        <div className={`togg2 ${state ? "active" : ""}`}>
          {state ? "PL" : "EN"}
        </div>
      </div>
    </div>
  );
};

export default Toggler;
