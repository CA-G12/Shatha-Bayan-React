import React from 'react'
export class Card extends React.Component {
    state = {
        color: 'gray'
    }

    render() {
        return <div className='card'>
            <img src={this.props.ele.medium_cover_image} onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://yts.mx/assets/images/movies/the_unknown_tour_2019/medium-cover.jpg";
            }} alt="card" />
            <div className='details'>
                <p >{this.props.ele.title}</p>
                <i className="fa-solid fa-heart" style={{ color: this.state.color }} onClick={() => {
                    this.props.toggleFav(this.props.ele, (color2) => this.setState({ color: color2 }))
                }}></i>
            </div>
        </div>
    }
}