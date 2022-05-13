import { useState } from 'react';
function Movies() {
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

       console.log(newData.Search)
    }
    
    return(
        <div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    fetchMovies();
                }}>
                    <div>
                        <h3>Enter a keyword to search for movies that are related</h3>
                        <input
                            placeholder='Enter a word'
                            onChange={(e) => {
                                setWord(e.target.value)
                            }}
                        />
                        <button type='submit'>Submit</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}
export default Movies;