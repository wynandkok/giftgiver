import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
class App extends Component {

    constructor () {
        super();
        this.state = { gifts: [] };
    }

    addGift = () => {
        const { gifts } = this.state;

        const ids = this.state.gifts.map(gift => gift.id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({ id: maxId + 1 });

        this.setState({ gifts });
    }

    render() {
        return (
            <div>
                <h2>Gift giver</h2>
                <div className="gift-list">
                {
                    this.state.gifts.map(gift => {
                        return (
                            <Gift key={ gift.id } />
                        )
                    })
                }
                </div>
                <Button className="btn-add" onClick={this.addGift}>Add a gift</Button>
            </div>
        )
    }
}

export default App;