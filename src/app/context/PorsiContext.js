import { createContext, useState } from 'react';

const initialState = 1;

export const porsiCtx = createContext(initialState);

const PorsiCtxProvider = ({ children }) => {
  const [porsi, setPorsi] = useState(initialState);

  const handlePlus = () => {
    setPorsi((prev) => prev + 1);
  };
  const handleMinus = () => {
    if (porsi > 1) {
      setPorsi((prev) => prev - 1);
    }
  };
  const value = {
    porsi,
    handleMinus,
    handlePlus,
  };
  return (
    <porsiCtx.Provider value={value}>{children}</porsiCtx.Provider>
  );
};
export default PorsiCtxProvider;
