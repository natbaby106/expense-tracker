import { makeStyles } from '@material-ui/core';

export default makeStyles (() => ({
    income: {
        maxHeight: '350px',
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
        padding: "10px",
        backgroundColor: 'white',
        marginLeft: "10px",
    },
    expense: {
        maxHeight: '350px',
        borderBottom: '10px solid rgba(255, 0, 0.5)',
        padding: "10px",
        backgroundColor: "red",
        marginTop: '5px'
    },
    assets: {
        maxHeight: '350px',
        borderBottom: '10px solid rgba(255, 0, 0.5)',
        padding: "10px",
        backgroundColor: "red",
        marginTop: '5px'
    },
    save: {
        maxHeight: '350px',
        borderBottom: '10px solid rgba(255, 0, 0.5)',
        padding: "10px",
        backgroundColor: "red",
        marginTop: '5px'
    },
    delete: {
        maxHeight: '450px',
        padding: "15px",
        backgroundColor: "red",
        marginTop: '5px'
    }
}));