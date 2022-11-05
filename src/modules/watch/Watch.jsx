import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back-arrow">
        <ArrowBackOutlined/> Back To Home
      </div>
      <video className='video' autoPlay controls src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
      />
    </div>
  );
}

export default Watch;