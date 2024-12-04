import React from 'react'
import { SearchBarProps } from '../../types';
import useStyles from './SearchBar.styles';


const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleChange,
  handleKeyDown,
  placeholder = "Search by name"
}: SearchBarProps) => {

  const classes = useStyles();

  return (
    <input
      className={classes.mainPageInput}
      type="text"  
      value={searchTerm}  
      onChange={(e) => handleChange(e.target.value)}  
      onKeyDown={handleKeyDown}  
      placeholder={placeholder}
    />  
  )
}

export default SearchBar;