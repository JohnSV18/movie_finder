import { useState } from 'react';
import Movie from '../Movie/Movie';
import WordList from '../WordList/WordList';
import { useDispatch } from 'react-redux'
import "./MovieList.css";

// import { addSearchedWord } from './actions'

import { addSearchedWord } from '../../actions';
function MovieList() {
    const dispatch = useDispatch()
    const [data, setData] = useState(null);
    const [word, setWord] = useState("");

    async function fetchMovies() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
                'X-RapidAPI-Key': '17cfa6957dmsh5ad0090acd6ec96p1b73abjsn85cfaa8ef5e2'
            }
        };
        
       const res = await fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${word}&r=json&page=1`, options)
       const newData = await res.json();

       setData(newData);

    }
    
    return(
        <div className='MovieList'>
            <div className='WordList'>
                <h3>These are your searched words so far:</h3>
                        <WordList />
            </div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    fetchMovies();
                }}>
                    <div>
                        <h3>Enter a title or a key word to get movies back!</h3>
                        <h3>Please enter a valid word</h3>
                        <input
                            placeholder='Enter a word'
                            onChange={(e) => {
                                setWord(e.target.value)
                            }}
                        />
                        <button type='submit'>Submit</button>
                        <div>
                        <button onClick={(e) => {
                            dispatch(addSearchedWord(word))
                        }}>Save Word</button>
                        </div>
                    </div> 
                    <div className='foundMovies'>
                        {data && data.Search.map((movie, index) => {
                            return(
                                <Movie
                                    key={index}
                                    Title={movie.Title}
                                    Year={movie.Year}
                                    Type={movie.Type}
                                    Poster={movie.Poster}
                                />
                            )
                        })}
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default MovieList;