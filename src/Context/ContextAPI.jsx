import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '66ec31e8b6msh2dae0fa7e7cfc27p183b0cjsnd8734633bb6e',
      },
    });

    const data = await res.json();
    setResults(data);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
