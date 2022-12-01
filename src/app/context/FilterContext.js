import { createContext, useState } from 'react';

const initialState = {
  query: '',
  category: 0,
  update: false,
};

export const filterCtx = createContext(initialState);

const FilterCtxProvider = ({ children }) => {
  const [query, setQuery] = useState(initialState.query);
  const [category, setCategory] = useState(initialState.category);
  const [update, setUpdate] = useState(initialState.update);
  return (
    <filterCtx.Provider
      value={{
        query,
        setQuery,
        category,
        setCategory,
        update,
        setUpdate,
      }}>
      {children}
    </filterCtx.Provider>
  );
};

export default FilterCtxProvider;
