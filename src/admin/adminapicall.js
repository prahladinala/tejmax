import { API } from "../backend";

//Theatre Calls
//Add Theatre
export const addTheatre = (theatre) => {
    return fetch(`${API}/theatres`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(theatre)
    })
        .then(response => {
            return response.json()
        })
        .catch(
            err => console.log(err)
        )
}

//Get All Theatres
export const getTheatres = () => {
    return fetch(`${API}/theatres`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(
            err => console.log(err)
        )
}

//Movies Calls
//Add Movie
export const addMovie = (movie) => {
    return fetch(`${API}/newmovies`, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: movie
    })
        .then(response => {
            return response.json()
        })
        .catch(
            err => console.log(err)
        )
}

//Get All Movies
export const getMovies = () => {
    return fetch(`${API}/newmovies`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(
            err => console.log(err)
        )
}

// Delete a movie
export const deleteMovie = (movieId) => {
    return fetch(`${API}/newmovies/${movieId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(
            err => console.log(err)
        )
}
// Get a movie
export const getMovie = movieId => {
    return fetch(`${API}/newmovies/${movieId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(
            err => console.log(err)
        )
}

// Update a movie
export const updateMovie = (movieId, movie) => {
    return fetch(`${API}/newmovies/${movieId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
        },
        body: movie
    })
        .then(response => {
            return response.json()
        })
        .catch(
            err => console.log(err)
        )
}