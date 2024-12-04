import React from 'react'
import useStyles from './SearchBar.styles';

type IProps = {
  searchTerm: string
  handleChange: (searchTerm: string) => void
  placeholder?: string
}

const SearchBar: React.FC<IProps> = ({searchTerm, handleChange, placeholder = "Search by name"}: IProps) => {
  const classes = useStyles();
  return (
    <input
      className={classes.mainPageInput}
      type="text"  
      value={searchTerm}  
      onChange={(e) => handleChange(e.target.value)}  
      placeholder={placeholder}
    />  
  )
}

export default SearchBar;