import React from 'react'
import { List } from '../Main/Cards'
import './style.css'

export class Header extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return <div className='header'>
            <h1>Movies</h1>
            <button onClick={() => {
                this.props.setInitialize(!this.props.initialize)
                // this.props.handelClose("block")
            }
            }>Favorites</button>
            {this.props.initialize && this.props.close && <List setClose={this.props.setClose} favorites={this.props.favorite}></List>}
        </div>
    }
}