import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';
import CardList from '../js/components/list';
import ListContainer from '../js/components/list-container';
import Board from '../js/components/board';

describe('Card Component', function() {
    it('Renders the card', function() {
        const text = "Testing Text";
        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
        console.log(result.props);
        result.props.children.props.className.should.equal('card-text');
        result.props.children.props.children.should.equal('Testing Text');
    })
})

describe('CardList Component', function() {
    it('Renders the CardList', function() {
        const list = [
            "This is Card 1",
            "This is Card 2",
        ];
        const renderer = TestUtils.createRenderer();
        renderer.render(<CardList cards={list} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card-list');
        result.props.children[1].should.have.lengthOf(2);
        result.props.children[1][0].props.className.should.equal('card');
        result.props.children[1][0].props.text.should.equal('This is Card 1');
        result.props.children[1][1].props.className.should.equal('card');
        result.props.children[1][1].props.text.should.equal('This is Card 2');
    });
});

describe('Board Component', function() {
    it('Renders the Board', function() {
        const data = {
            title: "This is a board",
            lists: [
                {title: "List title 1",
                 cards: ["Card 1", "Card 2", "Card 3"],
                },
                {title: "List title 2",
                 cards: ["Card 4", "Card 5", "Card 6"],
                }
            ]
        };
        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title={data.title} lists={data.lists} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board');
    })
})