import { makeStyles } from '@mui/styles';  
import colors from '../../colors';
  
const useStyles = makeStyles({  
  tableContainer: {  
    width: '100%',  
    overflowX: 'auto',  
    marginTop: '20px',  
  },  
  table: {  
    minWidth: 650,  
    borderCollapse: 'collapse',  
  },  
  tableHead: {  
    backgroundColor: `${colors.table.head}`,  
  },  
  tableHeader: {  
    fontWeight: 'bold',  
    padding: '10px',  
    textAlign: 'left',  
    borderBottom: `2px solid ${colors.table.border}`,  
  },  
  tableBody: {  
    '& tr:hover': {  
      backgroundColor: `${colors.table.body}`,  
      cursor: 'pointer',  
    },  
  },  
  tableRow: {  
    transition: 'background-color 0.2s',  
  },  
  tableCell: {  
    padding: '10px',  
    borderBottom: `1px solid ${colors.table.border}`,  
  },  
});  
  
export default useStyles;  