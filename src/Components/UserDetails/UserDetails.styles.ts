import { makeStyles } from '@mui/styles';  
import colors from '../../colors';

const useStyles = makeStyles({  
  userDetailContainer: {  
    display: 'flex',
    padding: '20px',
    borderRadius: '8px',
    justifyContent: 'center',
  },  
  userDetailContent: {  
    gap: '10px 20px',  
    alignItems: 'center',  
    backgroundColor: `${colors.white}`,  
    padding: '30px 20px',  
    borderRadius: '8px',  
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  
    width: '40%',
  },  
  label: {  
    fontWeight: 'bold',  
    color: `${colors.userDetails.label}`,  
  },  
  value: {  
    color: `${colors.userDetails.value}`,  
    paddingLeft: '5px',
  },
});
export default useStyles;