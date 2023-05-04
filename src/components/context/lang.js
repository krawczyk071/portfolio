import { createContext, useState } from "react";

export const LangContext = createContext();
const initialState = true;

export const LangProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState(initialState);

  return (
    <LangContext.Provider value={[state, setState]}>
      {children}
    </LangContext.Provider>
  );
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE": {
//       return !state;
//     }
//     default:
//       return state;
//   }
// };
