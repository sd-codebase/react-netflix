import './listitem.scss'
import { PlayArrowRounded, ThumbDownAltRounded, ThumbUpAltRounded, AddRounded } from "@material-ui/icons";
import { useState } from 'react';

const ListItem = ({number}) => {
  const [isHovered, setHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const widthInPx = (number * (20 * 16)); // fix me
  const leftAddedWidthInPx = (2.5 * 16) * (number * 2); // fix me
  console.log(widthInPx, leftAddedWidthInPx);
  const style = {left: isHovered && widthInPx - leftAddedWidthInPx};
  return (
    <div style={style} className='list-item' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {!isHovered ? (
        <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      ) : (<>
        <video className='video-trailer' src={trailer} autoPlay={true} loop />
        <div className="info">
          <div className="actions">
            <AddRounded className='icon'/>
            <PlayArrowRounded className='icon'/>
            <ThumbUpAltRounded className='icon'/>
            <ThumbDownAltRounded className='icon'/>
          </div>
          <div className="info-top">
            <span>1 hr 16 mins</span>
            <span className="limit">16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam nam maiores laudantium ipsa.
          </div>
          <div className="gener">Action</div>
        </div>
      </>)}
      

      
    </div>
  )
}

export default ListItem