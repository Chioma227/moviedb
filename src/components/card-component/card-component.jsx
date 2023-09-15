import { Link } from 'react-router-dom';
import './card-component.scss'


export default function CardComponent ({movie}){
    const { title, poster_path, release_date, id} = movie;
    return(
        <div data-testid='movie-card'>
            <Link to={`movies/${id}`} className='movie-card-container' >
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={`${title}`} data-testid = 'movie-poster'/>
                <div className='footer'>
                    <p className='title' data-testid = 'movie-title' >{title}</p>
                    <p className='release-date' data-testid= 'movie-release-date'>{release_date}</p>
                </div>
            </Link>
        </div>
    )
}