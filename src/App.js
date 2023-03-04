import { Component } from "react";
import CardEditor from "./CardEditor";
import CardViewer from "./CardViewer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



class App extends Component {
    state = {
        editor: true,
        cards: [],
    };

    // delete data
    removeData = (index) => {
        this.setState({
            cards: this.state.cards.filter((row, i) => i !== index)
        });
    };


    // on submit fct
    handleSubmit = (cardsData) => {
        this.setState({
            cards: [...this.state.cards, cardsData],
        });
    };


    render() {
        return this.state.editor ? 
        <CardEditor
            cards={this.state.cards} 
            switchView={this.switchView} 
            handleSubmit={this.handleSubmit}
            removeData={this.removeData}
        /> : 
        <CardViewer 
            cards={this.state.cards}
            switchView={this.switchView} 
        />
    };
    
    // Change view
    switchView = () => {
        this.setState({editor: !this.state.editor});
    };
};

export default App;