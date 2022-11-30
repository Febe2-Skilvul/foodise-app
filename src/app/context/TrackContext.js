import { createContext, useState } from 'react';

const initialState = {
  menu: 'Nutrition',
};

export const trackCtx = createContext(initialState);

const TrackCtxProvider = ({ children }) => {
  const [content, setContent] = useState(initialState.menu);

  const value = {
    content,
    setContent,
  };
  return (
    <trackCtx.Provider value={value}>{children}</trackCtx.Provider>
  );
};

export default TrackCtxProvider;
