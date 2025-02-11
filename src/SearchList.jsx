import React from 'react'
import './SearchList.css';

const SearchList = ({card,cardtitle}) => {
  return (
    <div className='searchcard'>
        <div className='searchcardflex'>
            <img className='searchmovieimg' src={card} alt={{cardtitle}} />
            <span className='movietitle'>{cardtitle}</span>
        </div>
        <i class="bi bi-play-circle"></i>
    </div>
  )
}

export default SearchList