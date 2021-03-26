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
  expense: {
      maxHeight: '350px',
      borderBottom: '10px solid rgba(255, 0, 0.5)',
      padding: "10px",
      backgroundColor: "red",
      marginTop: '5px'
  },
  button: {
    padding: 0,
    margin: '5px',
    backgroundColor: "blue",
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  cancelbutton: {
    margin: '15px',
    backgroundColor: "red",
    justifyContent: 'center',
    marginBottom: '5px',
  },
    sav: {
        maxHeight: '350px',
        borderBottom: '10px solid rgba(255, 0, 0.5)',
        padding: "10px",
        backgroundColor: "red",
    },
    delet: {
        maxHeight: '250px',
        borderBottom: '10px solid rgba(255, 0, 0.5)',
        padding: "15px",
        backgroundColor: "red",
        marginTop: '5px'
    }
}));