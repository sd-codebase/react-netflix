import './navbar.scss';
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset < 100 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" /> 
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>News & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="/MY pic.jpg" alt="" />
                <div className="user-profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar