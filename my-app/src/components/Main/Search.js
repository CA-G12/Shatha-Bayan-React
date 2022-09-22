import React from 'react'
import { getMovieData } from '../../utils/getMovieData';
import './style.css'
export class Search extends React.Component {
    constructor(props) {
        super();

    }

    getData = () => {
        let URL = `https://yts.mx/api/v2/list_movies.json?limit=32&query_term=${this.props.movieName}`
        console.log(URL)
        getMovieData(URL)
            .then(data => {
                if (data.data.movie_count === 0) {
                    throw new Error('Movie Not Found')
                } else return data.data.movies
            })
            .then(data => {
                this.props.setData({ data })
            })
            .catch(err => {
                this.props.setError(err.message)
            })

    }

    render() {
        return <div className='input'>
            <input type='text' placeholder="enter movie name" onChange={(e) => this.props.setMovieName(e.target.value)} />
            <button onClick={(e) => {
                e.target.previousSibling.value = ''
                this.getData()
            }
            }> Search</button>
        </div>
    }

}

