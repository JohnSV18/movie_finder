function Movie(props){
    return(
        <div className="Movie">
            <h3>{props.Title}</h3>
            <img src={props.Poster} alt="movie"/>
            <h3>Year: {props.Year}</h3>
            <h3>Type: {props.Type}</h3>
        </div>
    )
}
export default Movie;