import React from 'react';  
import Button from '@mui/material/Button';  
import { SearchButtonProps } from '../../types';
import useStyles from './SearchButton.styles';


const StyledButton: React.FC<SearchButtonProps> = ({ children, handleClick }: SearchButtonProps) => {  
  const classes = useStyles();
  return (  
    <Button  
      className={classes.button}
      variant="contained"  
      color="primary"  
      onClick={handleClick}
    >  
      {children}
    </Button>  
  );  
};  
  
export default StyledButton;  