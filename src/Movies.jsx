import React, { useState } from 'react'
import './Movies.css';
import BGimage from './Images/Netflix-BG.jpg';
import Netflix from './Images/Netflix_Logo_PMS.png';
import Profile01 from './Images/Profile01.png';
import Profile02 from './Images/Profile02.jpg';
import MovieBanner from './Images/maharaja.jpg';
import Card1 from './Images/card1.jpg';
import Card2 from './Images/card2.jpg';
import Card3 from './Images/card3.jpg';
import Card4 from './Images/card4.jpg';
import Card5 from './Images/card5.jpg';
import MoviesList from './MoviesList';
import SearchList from './SearchList';

const Movies = () => {
  const [searchValue,setSearchValue] = useState("");

  const movieSearches=[
    {image:Card1,movieName:"My Fault"},
    {image:Card2,movieName:"Squid Game"},
    {image:Card3,movieName:"Mufasa"},
    {image:Card4,movieName:"Lucky Baskar"},
    {image:Card5,movieName:"Rim of the World"}
  ]

  const handleSearch =(event) =>{
    setSearchValue(event.target.value);
    console.log(searchValue);
  }
  
  const filteredMovies = searchValue? movieSearches.filter(movie => movie.movieName.toLowerCase().includes(searchValue.toLowerCase())):movieSearches;


  return (
    <div className='Moviecontainer'>
      <div><img className="Moviebgimage" src={BGimage} alt="BGimage" /></div>
      <div className="Movietransparent"></div>
      <div className='outerdiv'>
        <div className='Moviehome'>
          <div className='Accountinfo'>
            <div><img className="Movienetfliximg" src ={Netflix} alt="Netflix" /></div>
            <div className='Accountdetails'>
              <div className='profileinfo'>
                <div className='profile'>
                  <img className='profilephoto' src={Profile01} alt='Maxine' />
                  <span className='profilename'>Maxine</span>
                </div>
                <div className='profile'>
                  <img className='profilephoto' src={Profile02} alt='Robert' />
                  <span className='profilename'>Robert</span>
                </div>
                <div className='addprofile'>
                  <div className='adduser'> + </div>
                  <span className='adduserprofilename'>Add Profile</span>
                </div>
              </div>
              <div className='manageprofile'>
                <i class="bi bi-pencil-fill"></i> 
                <span className='iconname'>Manage Profiles</span>
              </div>
              <div className='accountoptions'>
                <div className='options'>
                  <i class="bi bi-bell"></i>
                  <span className='iconname'>Notifications</span>
                </div>
                <div className='options'>
                  <i class="bi bi-check2"></i>
                  <span className='iconname'>My Lists</span>
                </div>
                <div className='options'>
                  <i class="bi bi-gear"></i>
                  <span className='iconname'>App Settings</span>
                </div>
                <div className='options'>
                  <i class="bi bi-person-circle"></i>
                  <span className='iconname'>Account</span>
                </div>
                <div className='options'>
                  <i class="bi bi-question-circle"></i>
                  <span className='iconname'>Help</span>
                </div>
              </div>
              <div className='signout'>Sign Out</div>
            </div>        
          </div>
          <div className="moviecontents">
            <div className='Navbar'>
              <span>Home</span>
              <span>TV Shows</span>
              <span>Movies</span>
              <span>New & Popular</span>
              <span>My List</span>
              <i class="bi bi-search"></i>
              <i class="bi bi-bell-fill"></i>
            </div>
            <div className="movies">
              <div className='moviebanner'>
                <img className='moviebannerimg' src={MovieBanner} alt='NewlyReleased' />
                <div className='movieinfo'>
                  <div className='movieDesc'>A barber seeks vengeance after his home is burglarized, cryptically telling police his "lakshmi" has been taken, leaving them uncertain if it's a person or object. His quest to recover the elusive "lakshmi" unfolds.</div>
                  <div className='btns'>
                    <div className='play-btn'>
                      <i class="bi bi-play-fill"></i>
                      <span className='play'>Play</span>
                    </div>
                    <div className='info-btn'>
                      <i class="bi bi-info-circle"></i>
                      <span className='moreinfo'>More info</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='movielist'>
                <MoviesList title={"Popular on Netflix"} category={"popular"}/>
                <MoviesList title={"Top rated"} category={"top_rated"}/>
              </div>              
            </div>
            <div className="Navoptions">
              <div className='navoptionicons'>
                <i class="bi bi-house-door"></i>
                <span>Home</span>
              </div>
              <div className='navoptionicons'>
                <i class="bi bi-play-btn"></i>
                <span>New & Hot</span>
              </div>              
              <div className='navoptionicons'>
                <i class="bi bi-emoji-laughing"></i>
                <span>Fast Laughs</span>
              </div>              
              <div className='navoptionicons'>
                <i class="bi bi-cloud-arrow-down"></i>
                <span>Downloads</span>
              </div>
            </div>
          </div>
          <div className="topsearches">
            <div>
              <input className='searchbar' placeholder='Search' onChange={handleSearch}/>
            </div>
            <span className="topsearchtitle">Top Searches</span>
            <div className="searchlist">
              {filteredMovies.map((movie,ind)=>{
                return <SearchList key={ind} card={movie.image} cardtitle={movie.movieName} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Movies