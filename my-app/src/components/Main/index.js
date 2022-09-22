import React from 'react'
import { Search } from './Search'
import { Cards } from './Cards'
import { Header } from '../Header'
export class Main extends React.Component {
    state = {
        data: null,
        movieName: '',
        initialize: false,
        favorite: JSON.parse(window.localStorage.getItem('favorite')) || [],
        error: false,
        close: { visibility: 'hidden' }
    }

    setData = (data1) => {
        this.setState({ data: data1 })
    }
    setMovieName = (movieName) => {
        this.setState({ movieName: movieName })
    }

    setInitialize = (newInitialize) => {
        this.setState({ initialize: newInitialize })
    }

    addFav = (ele) => {
        this.setState(prev => {
            const newFav = [...prev.favorite, ele]
            localStorage.setItem('favorite', JSON.stringify(newFav))
            return { favorite: newFav }
        })
    }

    setError = (err) => {
        this.setState({ error: err })
    }

    removeFav = (ele) => {
        this.setState(prev => {
            const newFav = prev.favorite.filter(i => i.id !== ele.id)
            localStorage.setItem('favorite', JSON.stringify(newFav))
            return { favorite: newFav }
        })
    }
    handelClose = (display) => {
        this.setState({
            close: { visibility: display }
        })
    }

    render() {
        return <>
            <Header initialize={this.state.initialize} setInitialize={this.setInitialize} favorite={this.state.favorite} handelClose={this.handelClose}></Header>
            <Search movieName={this.state.movieName} setData={this.setData} setMovieName={this.setMovieName} error={this.state.error} setError={this.setError}> </Search>
            <Cards data={this.state.data} setData={this.setData} favorite={this.state.favorite} addFav={this.addFav} removeFav={this.removeFav} error={this.state.error} setError={this.setError} handelClose={this.handelClose} close={this.state.close}></Cards>
        </>
    }

}


export default Main
