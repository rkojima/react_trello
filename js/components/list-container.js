import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import CardList from './list';

export default class listContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            cards: [],
        };
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddInputChanged(event) {
        this.setState({
            text: event.target.value,
        })
    }

    onAddSubmit(event) {
        event.preventDefault();
        console.log(this.state.cards);
        this.setState({
            cards: this.state.cards.concat(this.state.text),
            text: "",
        })
        console.log("Submit has been clicked");
    }

    render() {
        return (
            <CardList 
            cards={this.state.cards} 
            onAddInputChanged={this.onAddInputChanged}
            onAddSubmit={this.onAddSubmit}
            />
            )
    }
} 