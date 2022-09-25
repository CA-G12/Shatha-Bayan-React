import React from "react";
import { getMovieData } from "../../utils/getMovieData";

export class Cards extends React.Component {
    constructor(props) {
        super();
    }
    // state = {
    //     favorite: []
    // }
    URL = "https://yts.mx/api/v2/list_movies.json?limit=32&page=2";
    componentDidMount() {
        getMovieData(this.URL)
            .then((data) => data.data.movies)
            .then((data) => this.props.setData({ data }));
    }

    componentDidUpdate(prevProps) {
        console.log("prev", prevProps.favorite);
        console.log('state', this.props.favorite);
        if (prevProps.favorite !== this.props.favorite) {
            localStorage.setItem("favorite", JSON.stringify(this.props.favorite));
        }
    }
    render() {
        console.log("card data", this.props.data);
        const cardsData = this.props.data;
        if (!cardsData) return <div>Loading...</div>;
        console.log(this.props.favorite);
        return (
            <>
                {cardsData.data.map((ele) => (
                    <>
                        <p>{ele.title}</p>
                        <button
                            onClick={() => {
                                const { favorite } = this.props;
                                if (favorite.indexOf(ele) === -1) {
                                    this.props.setFavorite([...favorite, ele]);
                                } else {
                                    const newList = favorite.filter(x => x.id !== ele.id)
                                    this.props.setFavorite(newList);
                                }
                            }}
                        >
                            Click
                        </button>
                    </>
                ))}
            </>
        );
    }
}

export class List extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        console.log("list", this.props.favorites);
        const movies = JSON.parse(localStorage.getItem("favorite"));
        <i class="fa-solid fa-xmark"></i>
        if (movies.length === 0) return <p>no movies</p>;
        return (
            <>
                {movies.map((ele) => (
                    <li>{ele.id}</li>
                ))}
            </>
        );
    }
}
