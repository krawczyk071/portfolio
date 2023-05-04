import React, { useContext } from "react";
import { LangContext } from "./context/lang";

const Toggler = () => {
  // const [state, setState] = useState(false);
  const [state, setState] = useContext(LangContext);

  return (
    <div className="togg" onClick={() => setState((prev) => !prev)}>
      <div className={`togg1 ${!state ? "active" : ""}`}>
        <div className={`togg2 ${!state ? "active" : ""}`}>
          {!state ? "PL" : "EN"}
        </div>
      </div>
    </div>
  );
};

export default Toggler;
