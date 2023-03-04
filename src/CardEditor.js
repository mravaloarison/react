import { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="left">Front</TableCell>
                <TableCell align="left">Back</TableCell>
                <TableCell align="right">Delete</TableCell>
            </TableRow>
        </TableHead>
    )
}


const MyTableBody = (props) => {
    const rows = props.cards.map((row, index) => {
        return (
            <TableRow key={index}>
                <TableCell align="left">{row.front}</TableCell>
                <TableCell align="left">{row.back}</TableCell>
                <TableCell align="right">
                    <Button size="small" variant="outlined" color="error" onClick={() => props.removeData(index)}>delete</Button>
                </TableCell>
            </TableRow>
        )
    })

    return <TableBody>{rows}</TableBody>
}


class CardEditor extends Component {
    initialState = {
        front: "",
        back: ""
    }
    state = this.initialState;

    // on user input
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // on submit
    submitFunction = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    render() {
        const { cards, removeData } = this.props;
        return (
            <>
                {/* table */}
                <Container maxWidth="lg">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small">
                            <TableHeader />
                            <MyTableBody cards={cards} removeData={removeData} />
                        </Table>
                    </TableContainer>
                </Container>

                <br />

                <Container maxWidth="sm">
                    <Stack spacing={4}>
                        <Stack spacing={2}>

                            {/* User input */}
                            <Stack direction="row" spacing={2}>
                                <TextField fullWidth label="Front Card" variant="standard" name="front" id="front" value={this.state.front} onChange={this.handleChange} />
                                <TextField fullWidth label="Back Card" variant="standard" name="back" id="back" value={this.state.back} onChange={this.handleChange} />                    
                            </Stack>

                            {/* Add to data */}
                            <Grid>
                                <Button variant="contained" onClick={this.submitFunction}>Add</Button>
                            </Grid>
                        </Stack>

                        {/* Switch to viewer */}
                        <Grid>
                            <Button variant="outlined" size="small" onClick={this.props.switchView}>Swicth to Viewer</Button>
                        </Grid>
                    </Stack>
                </Container>
            </>

        )
    }
};

export default CardEditor;