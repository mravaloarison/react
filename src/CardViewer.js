import { Component } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


class CardViewer extends Component {
    state = {
        index: 0,
    };

    previousBtn = () => {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        } else {
            alert("Back to square One")
        }
    }


    NextBtn = () => {
        if (this.state.index < (this.props.cards.length - 1)) {
            this.setState({
                index: this.state.index + 1
            })
        } else {
            alert("End of quizzes")
        }
    }


    render() {
        const Item = this.props.cards[this.state.index];
        let frontView = 0;

        try {
            frontView = Item.front;
        } catch (error) {
            frontView = ""
        }
        
        return (
            <Container maxWidth="md">

                <Stack spacing={4}>
                    <Stack spacing={2}>
                        <Container component={Paper}>
                            <Typography variant="h3" component="h2">{frontView}</Typography>
                        </Container>

                        <Stack direction="row" spacing={2}>
                            <Button size="small" variant="contained" onClick={this.previousBtn}>Previous</Button>
                            <Button size="small" variant="contained" onClick={this.NextBtn}>Next</Button>
                        </Stack>
                    </Stack>

                    {/* switch to editor mode */}
                    <Grid>
                        <Button variant="outlined" size="small" onClick={this.props.switchView}>Swicth to Editor</Button>
                    </Grid>
                </Stack>
            </Container>
        )
    }
};

export default CardViewer;