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
  list: {
    maxHeight: '350px',
    backgroundColor: "red",
    marginTop: '5px',
    color: '#fff',
  },
}));