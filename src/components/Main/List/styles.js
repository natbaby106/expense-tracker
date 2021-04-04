import { makeStyles } from '@material-ui/core/styles';
import { red, green, blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    maxHeight: '350px',
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: blue[500],
  },
  paperContainer: {
    color: theme.palette.getContrastText(red[500]),
    maxHeight: '350px',
    backgroundColor: "red",
    marginTop: '5px',
  },
  list: {
    maxHeight: '460px',
    backgroundColor: "red",
    marginTop: '5px',
    color: '#fff',
  },
  expense: {
    maxHeight: '350px',
    borderBottom: '10px solid rgba(255, 0, 0.5)',
    padding: "10px",
    backgroundColor: "red",
    marginTop: '5px'
  },
  sav: {
    maxHeight: '350px',
    borderBottom: '10px solid rgba(255, 0, 0.5)',
    padding: "10px",
    backgroundColor: "red",
    marginTop: '5px'
  }
}));