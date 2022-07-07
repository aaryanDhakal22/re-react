import React from "react";
import './search-box.styles.css'

interface SearchProps{
    placeholder:string
    handleSearch: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({placeholder,handleSearch}:SearchProps)=>{
    return <input className="search" 
    type="search" 
    placeholder={placeholder}
    onChange={handleSearch}
    /> 
}
export default SearchBox