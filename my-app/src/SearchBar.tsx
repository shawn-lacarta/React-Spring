import React, { useContext } from 'react'
import { SearchContext } from './SearchContext';


export default function SearchBar() {
    const {addSearchTerm} = useContext(SearchContext);
    
    return (
        <div>
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {addSearchTerm(event.target.value)}} />
        </div>
    )
}
