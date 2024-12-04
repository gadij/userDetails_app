import React from 'react'
import useStyles from './SearchBar.styles';

type IProps = {
  searchTerm: string
  handleChange: (searchTerm: string) => void
  placeholder?: string
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<IProps> = ({
  searchTerm,
  handleChange,
  handleKeyDown,
  placeholder = "Search by name"
}: IProps) => {

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