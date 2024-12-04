import { makeStyles } from '@mui/styles';  
  
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
    backgroundColor: '#fff',  
    padding: '30px 20px',  
    borderRadius: '8px',  
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  
    width: '40%',
  },  
  label: {  
    fontWeight: 'bold',  
    color: '#333',  
  },  
  value: {  
    color: '#555',  
    paddingLeft: '5px',
  },  
  // mainPageTitle: {  
  //   marginBottom: '20px',
  // },
  // mainPageInput: {  
  //   margin: '10px 0',
  //   padding: '8px',
  //   width: '100%',
  //   maxWidth: '300px',
  //   boxSizing: 'border-box',
  // },  
  // mainPageButton: {  
  //   width: 'auto',
  //   cursor: 'pointer',
  //   backgroundColor: `${colors.primary}`,
  // },
  // mainPageActionContainer: {
  //   gap: '12px',
  //   width: '100%',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
});
export default useStyles;