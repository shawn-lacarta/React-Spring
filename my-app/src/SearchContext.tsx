import React from 'react'
import { createContext, useState, FC } from 'react';

export type SearchContextState = {
    searchTerm: string
    addSearchTerm: (name: string) => void
};

const SearchContextDefault: SearchContextState = {
    searchTerm: "",
    addSearchTerm: () => {}
}

export const SearchContext = 
createContext<SearchContextState>(SearchContextDefault);

const SearchContextProvider: FC = ({ children }) => {


    const[searchTerm, setSearchTerm] = useState(SearchContextDefault.searchTerm);
    const addSearchTerm = (newSearchTerm: string) => setSearchTerm(newSearchTerm);

    return (
       <SearchContext.Provider value={{searchTerm, addSearchTerm}}>
           {children}
       </SearchContext.Provider>
    )
};

export default SearchContextProvider;
