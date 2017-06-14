import React from 'react';
import Card from './card';

function Input(props) {
    return <input onChange={props.onChange} type="text" />;
}

function Submit(props) {
    return <button onAddSubmit={props.onAddSubmit}>{props.text}</button>;
}

export default function CardList(props) {
    const cards = props.cards.map((message => {
        return <Card text={message} />
    }));
    return (
        <div className='card-list'>
            <h3>{props.title}</h3>
            {cards}
        </div>
        )
}

// export default function CardList(props) {
//     const cards = props.cards.map((message => {
//         return <Card text={message} />
//     }));

//     onAddInputChanged() {
//         console.log("Input has changed.");
//     }

//     onAddSubmit() {
//         event.preventDefault();
//         console.log("Something has been submitted")
//     }

//     return (
//         <div className='card-list'>
//             <h3>{props.title}</h3>
//             {cards}
//             <form>
//                 <Input onChange={this.onAddInputChanged} />
//                 <Submit onAddSubmit={this.onAddSubmit} type="submit">Submit</button>
//             </form>
//         </div>
//         )
// }

// class CardList extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     onAddInputChanged() {
//         console.log("Input has changed.");
//     }

//     onAddSubmit() {
//         event.preventDefault();
//         console.log("Something has been submitted")
//     }

//     render() {
//         return (
//             <div className='card-list'>
//                 <h3>{props.title}</h3>
//                 {cards}
//                 <form>
//                     <Input onChange={this.onAddInputChanged} />
//                     <Submit onAddSubmit={this.onAddSubmit} type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

