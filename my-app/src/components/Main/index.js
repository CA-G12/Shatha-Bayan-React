import React from "react";
import { Search } from "./Search";
import { Cards } from "./Cards";
import { Header } from "../Header";
export class Main extends React.Component {
    state = {
        data: null,
        movieName: "",
        initialize: false,
        favorite: [],
        close: true,
    };

    setData = (data1) => {
        this.setState({ data: data1 });
    };
    setMovieName = (movieName) => {
        this.setState({ movieName: movieName });
    };

    setInitialize = (newInitialize) => {
        this.setState({ initialize: newInitialize });
    };
    setFavorite = (list) => {
        this.setState({ favorite: list });
    };

    setClose=(bool)=>{
        this.setState({close: bool})
    }
    render() {
        return (
            <>
                <Header
                    initialize={this.state.initialize}
                    setInitialize={this.setInitialize}
                    favorite={this.state.favorite}
                    close={this.state.close}
                    setClose={this.setClose}
                ></Header>
                <Search
                    movieName={this.state.movieName}
                    setData={this.setData}
                    setMovieName={this.setMovieName}
                >
                    {" "}
                </Search>
                <Cards
                    data={this.state.data}
                    setData={this.setData}
                    favorite={this.state.favorite}
                    setFavorite={this.setFavorite}
                ></Cards>
            </>
        );
    }
}

export default Main;
