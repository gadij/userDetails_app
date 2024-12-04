import React from 'react';  
import Button from '@mui/material/Button';  
import useStyles from './SearchButton.styles';

type IProps = {
  children: string | JSX.Element
  handleClick: () => void
}
const StyledButton: React.FC<IProps> = ({ children, handleClick }: IProps) => {  
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