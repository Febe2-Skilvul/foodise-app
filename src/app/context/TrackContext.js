import { createContext, useState } from 'react';

const initialState = {
  menu: 'Nutrition',
  date: false,
};

export const trackCtx = createContext(initialState);

const TrackCtxProvider = ({ children }) => {
  const [content, setContent] = useState(initialState.menu);
  const [date, setDate] = useState(initialState.date);
  const value = {
    content,
    setContent,
    date,
    setDate,
  };
  return (
    <trackCtx.Provider value={value}>{children}</trackCtx.Provider>
  );
};

export default TrackCtxProvider;
