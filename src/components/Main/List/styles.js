import { makeStyles } from '@material-ui/core/styles';
import { red, green, blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: blue[500],
  },
  list: {
    maxHeight: '150px',
    backgroundColor: "red",
    marginTop: '5px',
    color: '#fff',
  },
}));