import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
  button: {  
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)',  
    transform: 'translateY(-2px)',  
    transition: 'transform 0.2s, box-shadow 0.2s',  
    '&:hover': {  
      boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.15), 0px 3px 5px rgba(0, 0, 0, 0.1)',  
      transform: 'translateY(-4px)',  
    },  
  }, 
}));


export default useStyles;