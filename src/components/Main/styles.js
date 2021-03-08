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
  },
  cardContent: {
    paddingTop: 0,
    backgroundColor: 'red',
  },
  divider: {
    margin: '20px 0',
    backgroundColor: "red",
    marginTop: '5px'
  },
}));