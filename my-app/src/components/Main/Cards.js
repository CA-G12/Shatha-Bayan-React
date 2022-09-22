import React from 'react'
import { getMovieData } from '../../utils/getMovieData';
import { Card } from './card';


export class Cards extends React.Component {

    constructor(props) {
        super();
    }

    state = {
        loading: false,
    }

    URL = 'https://yts.mx/api/v2/list_movies.json?limit=32&page=2'
    componentDidMount() {
        this.setState({ loading: true })
        getMovieData(this.URL)
            .then(data => {
                return data.data.movies
            })
            .then(data => {
                this.props.setData({ data })
            })

        this.setState({ loading: false })
    }

    isFav = (item) => {
        const { favorite } = this.props
        return Boolean(favorite.find(i => i.id === item.id))
    }

    toggleFav = (ele, color) => {
        const isFavItem = this.isFav(ele)
        let color2
        if (isFavItem) {
            this.props.removeFav(ele)
            color2 = 'gray'
            color(color2)
        } else {
            this.props.addFav(ele)
            color2 = 'red'
            color(color2)
        }
        // isFavItem ? this.props.removeFav(ele) : this.props.addFav(ele)
    }

    render() {
        const cardsData = this.props.data;

        if (this.props.error) return <h1 className='error'>{this.props.error}</h1>
        if (!cardsData || this.state.loading) return <div className='loading'>Loading...</div>;
        return <div className='container'>
            {cardsData.data.map(ele =>
                <Card key={ele.id}ele={ele} toggleFav={this.toggleFav} isFav={this.isFav}></Card>
            )}
        </div>
    }

}

export class List extends React.Component {
    constructor(props) {
        super();
    }
    // state={
    //     close: {display:'none'}
    // }

    render() {
        const movies = JSON.parse(localStorage.getItem('favorite')) || []
        if (movies.length === 0) return <div className='popup-container' style={this.props.close}>
            <div className='popup'>
                <h1>No Favorite Movies</h1>
            </div>
        </div>
        return <div className='popup-container' style={this.props.close}>
            <div className='popup'>
                {/* <i className="fa-solid fa-xmark" onClick={()=> this.props.handelClose("hidden")}></i> */}
                {movies.map(ele => <div className='card'>
                    <img src={ele.medium_cover_image} alt="card" />
                    <div className='details'>
                        <p >{ele.title}</p>
                    </div>
                </div>)}
            </div>
        </div>
    }
}