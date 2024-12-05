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
    backgroundColor: `${colors.card.background}`,  
    padding: '30px 20px',  
    borderRadius: '8px',  
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',  
    width: '40%',
    '& p': {
      margin: '0',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      '&:not(:last-child)': {
        borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
      },
    }
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