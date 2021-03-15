import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundColor: "red",
    marginTop: '5px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: '#fff',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    marginTop: '5px',
    color: '#fff',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  cardContent: {
    maxHeight: '350px',
    paddingTop: 0,
    backgroundColor: 'red',
    marginTop: '5px'
  },
  divider: {
    margin: '20px 0',
    backgroundColor: "red",
    marginTop: '5px'
  },
  divider2: {
    margin: '20px 0',
    backgroundColor: "blue",
    marginTop: '15px'
  },
  sav: {
      maxHeight: '350px',
      borderBottom: '10px solid rgba(255, 0, 0.5)',
      padding: "10px",
      backgroundColor: "red",
  }
}));