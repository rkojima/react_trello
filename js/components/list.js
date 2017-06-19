import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

// export default function CardList(props) {
//     const cards = props.cards.map((message => {
//         return <Card text={message} />
//     }));
//     return (
//         <div className='card-list'>
//             <h3>{props.title}</h3>
//             {cards}
//             <form>
//             </form>
//         </div>
//         )
// }

export default class CardList extends React.Component {
    constructor(props) {
        super(props); 
    }

    // onAddInputChanged(event) {
    //     console.log(event.target.value);
    // }

    // onAddSubmit(event) {
    //     event.preventDefault();
    //     console.log("Submit has been clicked");
    // }

    render() {
        // possibly change this section from this.props.cards to something else?
        console.log("this.props.cards " + this.props.cards);
        const cards = this.props.cards.map((message) => {
            return <Card className="card" text={message} />
        });
        return (
            <div className='card-list'>
                <h3>{this.props.title}</h3>
                {cards}
                <form onSubmit={this.props.onAddSubmit}>
                    <input onBlur={this.props.onAddInputChanged} type="text" placeholder="Text Here" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

// ReactDOM.render(<CardList />, document.getElementById('app'));