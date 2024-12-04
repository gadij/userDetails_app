import { makeStyles } from '@mui/styles'; 
import colors from '../../colors';

const useStyles = makeStyles(() => ({
  mainPage: {  
    display: 'flex',  
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },  
  mainPageTitle: {  
    marginBottom: '20px',
  },
  mainPageInput: {  
    margin: '10px 0',
    padding: '8px',
    width: '100%',
    maxWidth: '300px',
    boxSizing: 'border-box',
  },  
  mainPageButton: {  
    width: 'auto',
    cursor: 'pointer',
    backgroundColor: `${colors.primary}`,
  },
  mainPageActionContainer: {
    gap: '12px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));
export default useStyles;