const checkResponse = response => {
    if (response.status !== 200) {
        throw new Error('Movie Not Found')
    }
    return response.json();
};

export const getMovieData = URL => {
    return fetch(URL)
        .then(checkResponse)
        .catch(err => {
            throw new Error(`fetch getMovieData failed ${err}`);
        });
};