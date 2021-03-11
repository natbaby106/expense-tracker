import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    maxHeight: '350px',
    justifyContent: 'center',
    marginBottom: '-10px',
    padding: '5px',
    backgroundColor: "red",
  },
  button: {
    padding: 0,
    margin: '5px',
    backgroundColor: "blue",
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
    sav: {
        maxHeight: '350px',
        borderBottom: '10px solid rgba(255, 0, 0.5)',
        padding: "10px",
        backgroundColor: "red",
    }
}));